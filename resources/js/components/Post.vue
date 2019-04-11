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
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
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
                    <div class="form-group">
                        <!-- <textarea v-model="form.body" name="body" id="article-editor"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('body') }"></textarea> -->
                        <!-- <ckeditor :editor="editor" v-model="form.body" :config="editorConfig"></ckeditor> -->
                       <!-- <editor v-model="form.body" class="form-control" :class="{ 'is-invalid': form.errors.has('body') }" :init="{path_absolute : '',
                        plugins: [
                            'link image'
                        ],
                        relative_urls: false,
                        height: 129, file_browser_callback: file_browser_callback()}"></editor> -->
                       <!-- <textarea v-model="form.body" name="body" class="form-control" :class="{ 'is-invalid': form.errors.has('body') } "></textarea> -->
                        <!-- <textarea id="my-editor" name="content" v-model="form.body"  class="form-control my-editor" :class="{ 'is-invalid': form.errors.has('body') }"></textarea> -->
                        <editor v-model="form.body" class="form-control" :class="{ 'is-invalid': form.errors.has('body') }" name="body" :init="{
                            path_absolute : '',
                            selector: 'editor[name=body]',
                            plugins: [
                                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                                'searchreplace wordcount visualblocks visualchars code fullscreen',
                                'insertdatetime media nonbreaking save table contextmenu directionality',
                                'emoticons template paste textcolor colorpicker textpattern'
                            ],
                            toolbar: 'createPostinsertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media',
                            relative_urls: false,
                            height: 400,
                            file_browser_callback : file_browser_callback
                        }" >
                        </editor>

                        <has-error :form="form" field="body"></has-error>
                    </div>
                    <div class="form-group">
                        <!-- <div class="input-group">
                        <span class="input-group-btn">
                            <a id="lfm" data-input="featureimage" data-preview="holder" class="btn btn-primary">
                            <i class="fas fa-images"></i> Choose
                            </a>
                        </span>
                       <input type="text" class="form-control" v-model="form.featureimage">
                        </div>
                        <img class="mt-3" :src="form.featureimage" /> -->
                        <div class="input-group">
                            <span class="input-group-btn">
                                <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                <i class="fas fa-images"></i> Choose
                                </a>
                            </span>
                            <input v-model="form.featureimage"
                                placeholder="Feature Image"
                                class="form-control"
                                id="thumbnail"
                                type="text" name="filepath" >
                        </div>
                        <img id="holder" style="margin-top:15px;max-height:100px;" src="img/logo.png">
                    </div>

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
                // editor: ClassicEditor,
                // editorConfig: {
                //     // plugins: [ CKFinder],
                //     // toolbar: [ 'ckfinder'],
                //     ckfinder:{
                //         // uploadUrl: '/laravel-filemanager/upload?command=QuickUpload&type=Files&responseType=json'
                //         uploadUrl: '/laravel-filemanager/upload?type=Images&_token=' + $('meta[name="csrf-token"]').attr('content')
                //     }
                // },
                editmode : false,
                posts : {},
                form: new Form({
                    id:'',
                    title : '',
                    body : '',
                    featureimage : '',
                })

            }
        },
        methods:{
            // openFileManager () {
            //     // lfm({type: 'image', prefix: '/laravel-filemanager'}, function(lfmItems, path) {
            //     //     lfmItems.forEach(function (lfmItem) {
            //     //         console.log(lfmItem.url)
            //     //         // context.invoke('insertImage', lfmItem.url);
            //     //     });
            //     // });
            //     // return false;
            //     // lfm({type: 'image', prefix: '/laravel-filemanager'}, function(url, path) {
            //     //     context.invoke('insertImage', url);
            //     // });
            // },
            file_browser_callback(field_name, url, type, win) {
                var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
                var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

                var cmsURL = '/laravel-filemanager?field_name=' + field_name;
                if (type == 'image') {
                cmsURL = cmsURL + "&type=Images";
                } else {
                cmsURL = cmsURL + "&type=Files";
                }

                tinyMCE.activeEditor.windowManager.open({
                    file : cmsURL,
                    title : 'Filemanager',
                    width : x * 0.8,
                    height : y * 0.8,
                    resizable : "yes",
                    close_previous : "no"
                });


            },
            getResults(page = 1) {
                axios.get('api/post?page=' + page)
                .then(response => {
                    this.posts = response.data;
                });
            },
            newPost(){
                this.editmode = false;
                this.form.reset();
                $('#lfm').filemanager('image');
            },
            editPost(post){

                this.editmode = true;
                this.form.reset();
                $('#addNewPost').modal('show');
                this.form.fill(post);
                 $('#holder').attr('src',this.form.featureimage);
                $('#lfm').filemanager('image');

            },
            loadPost(){
                if(this.$gate.isAdmin() || this.$gate.isSKAdmin()){
                    axios.get('api/post').then(({data}) => (this.posts = data));
                }

            },
            updatePost(){
                this.$Progress.start();
                this.form.featureimage =  $('#thumbnail').val();
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
                this.form.featureimage =  $('#thumbnail').val();
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


