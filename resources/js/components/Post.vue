@include('ckfinder::setup');
<script type="text/javascript" src="/js/ckfinder/ckfinder.js"></script>
<script>CKFinder.config( { connectorPath: '/ckfinder/connector' } );</script>
<template>
    <div class="container">
       <div class="row mt-3" v-if="$gate.isAdmin() || $gate.isSKAdmin()">
          <div class="col-12">
            <div class="card">
            <div class="card-header">
                <h3 class="card-title">Blog Posts</h3>

                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" @click="newPost" data-target="#addNewPost">Add New <i class="fas fa-user-plus fa-fw"></i></button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <tbody><tr>
                    <th>Title</th>
                    <th>Created by</th>
                    <th>Date Created</th>
                    <th>Modify</th>
                  </tr>
                  <tr v-for="post in posts.data" :key="post.id">
                    <!-- <td>{{post.id}}</td> -->
                    <td>{{post.title}}</td>
                    <td>{{post.user.name}}</td>
                    <td>{{post.created_at}}</td>
                    <td>
                        <a href="#" @click="editPost(post)">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a href="#" @click="deletePost(post.id)">
                            <i class="fas fa-trash text-red"></i>
                        </a>
                    </td>
                  </tr>
                </tbody></table>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                  <pagination :data="posts" @pagination-change-page="getResults"></pagination>
              </div>
            </div>
            <!-- /.card -->
          </div>
        </div>
        <div v-if="!($gate.isAdmin() || $gate.isSKAdmin())">
            <not-found></not-found>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="addNewPost" tabindex="-1" role="dialog" aria-labelledby="addNewPostLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 v-show="!editmode" class="modal-title" id="addNewPostLabel">New Post</h5>
                    <h5 v-show="editmode" class="modal-title" id="addNewPostLabel">Update Post</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form @submit.prevent="editmode ? updatePost() : createPost()">
                <div class="modal-body">
                    <div class="form-group">
                        <input v-model="form.title" type="text" name="title"
                            placeholder="Title"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                        <has-error :form="form" field="title"></has-error>
                    </div>
                    <ckeditor :editor="editor" v-model="form.body" :config="editorConfig"></ckeditor>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button v-show="!editmode" type="submit" class="btn btn-primary">Ceate</button>
                    <button v-show="editmode" type="submit" class="btn btn-success">Update</button>
                </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                editor: ClassicEditor,
                editorConfig: {
                    // plugins: [ CKFinder],
                    // toolbar: [ 'ckfinder'],
                    ckfinder:{
                        uploadUrl: '/ckfinder/connector?command=QuickUpload&type=Files&responseType=json'
                    }
                },
                editmode : false,
                posts : {},
                form: new Form({
                    id:'',
                    title : '',
                    body : '<p>Write your content here.</p>',
                })

            }
        },
        methods:{
            getResults(page = 1) {
                axios.get('api/post?page=' + page)
                .then(response => {
                    this.posts = response.data;
                });
            },
            newPost(){
                this.editmode = false;
                this.form.reset();
            },
            editPost(post){
                this.editmode = true;
                this.form.reset();
                $('#addNewPost').modal('show');
                this.form.fill(post);
            },
            loadPost(){
                if(this.$gate.isAdmin() || this.$gate.isSKAdmin()){
                    axios.get('api/post').then(({data}) => (this.posts = data));
                }

            },
            updatePost(){
                this.$Progress.start();
                this.form.put('api/post/'+this.form.id)
                .then(() => {
                    $('#addNewPost').modal('hide');
                    swal.fire(
                        'Updated!',
                        'Information has been updated.',
                        'success'
                    );
                    this.$Progress.finish();
                    Fire.$emit('AfterCreate');
                })
                .catch(() => {
                    this.$Progress.fail();
                });

            },
            deletePost(id){
                swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        // Send request to the server
                         if (result.value) {
                                this.form.delete('api/post/'+id).then(()=>{
                                    swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                    );
                                    Fire.$emit('AfterCreate');
                                }).catch(()=> {
                                    swal.fire("Failed!", "There was something wronge.", "warning");
                                });
                         }
                    })
            },
            createPost(){
                this.$Progress.start();
                this.form.post('api/post')
                .then(()=>{
                    $('#addNewPost').modal('hide');
                    Fire.$emit('AfterCreate');
                    toast.fire({
                        type: 'success',
                        title: 'Post Created in successfully'
                    })
                    this.$Progress.finish();

                })
                .catch(()=>{
                    this.$Progress.fail();
                });
            }
        },
        created() {
            Fire.$on('searching',() => {
                let query = this.$parent.search;
                axios.get('api/findPost?q=' + query)
                .then((data) => {
                    this.posts = data.data
                })
                .catch(() => {

                });
            });
            this.loadPost();
            Fire.$on('AfterCreate',() => {
                this.loadPost();
            });
        }
    }
</script>
<style>
.ck-content { height:500px; }
</style>
