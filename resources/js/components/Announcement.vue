<template>
    <div class="container">
       <div class="row mt-3" v-if="$gate.isAdmin() || $gate.isSKAdmin()">
          <div class="col-12">
            <div class="card">
            <div class="card-header">
                <h3 class="card-title">Announcements</h3>

                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" @click="newAnnouncement" data-target="#addNewAnnouncement">Add New <i class="fas fa-user-plus fa-fw"></i></button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <tbody><tr>
                    <th>Title</th>
                    <th>Created by</th>
                    <!-- <th>Category</th> -->
                    <th>Date Created</th>
                    <th>Modify</th>
                  </tr>
                  <tr v-for="announcement in announcements.data" :key="announcement.id">
                    <!-- <td>{{announcement.id}}</td> -->
                    <td>{{announcement.title}}</td>
                    <td>{{announcement.user.name}}</td>
                    <td>{{announcement.created_at}}</td>
                    <td>
                        <a href="#" @click="editAnnouncement(announcement)">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a href="#" @click="deleteAnnouncement(announcement.id)">
                            <i class="fas fa-trash text-red"></i>
                        </a>
                    </td>
                  </tr>
                </tbody></table>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                  <pagination :data="announcements" @pagination-change-page="getResults"></pagination>
              </div>
            </div>
            <!-- /.card -->
          </div>
        </div>
        <div v-if="!($gate.isAdmin() || $gate.isSKAdmin())">
            <not-found></not-found>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="addNewAnnouncement" tabindex="-1" role="dialog" aria-labelledby="addNewAnnouncementLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 v-show="!editmode" class="modal-title" id="addNewAnnouncementLabel">New Announcement</h5>
                    <h5 v-show="editmode" class="modal-title" id="addNewAnnouncementLabel">Update Announcement</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form @submit.prevent="editmode ? updateAnnouncement() : createAnnouncement()">
                <div class="modal-body">
                    <div class="form-group">
                        <input v-model="form.title" type="text" name="title"
                            placeholder="Title"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                        <has-error :form="form" field="title"></has-error>
                    </div>
                    <div class="form-group">
                        <editor v-model="form.body" class="form-control" :class="{ 'is-invalid': form.errors.has('body') }" name="body" :init="{
                            path_absolute : '',
                            selector: 'editor[name=body]',
                            plugins: [
                                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                                'searchreplace wordcount visualblocks visualchars code fullscreen',
                                'insertdatetime media nonbreaking save table contextmenu directionality',
                                'emoticons template paste textcolor colorpicker textpattern'
                            ],
                            toolbar: 'createAnnouncementsinsertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media',
                            relative_urls: false,
                            height: 400,
                            file_browser_callback : file_browser_callback
                        }" >
                        </editor>

                        <has-error :form="form" field="body"></has-error>
                    </div>
                    <div class="form-group">
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
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <a id="lfm2" data-input="thumbnail2" data-preview="holder2" class="btn btn-primary">
                                <i class="fas fa-file"></i> Choose
                                </a>
                            </span>
                            <input v-model="form.attachment"
                                placeholder="File Attachment"
                                id="thumbnail2" class="form-control" type="text" name="filepath">
                        </div>
                        <img id="holder2" style="margin-top:15px;max-height:100px;">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button v-show="!editmode" type="submit" class="btn btn-primary">Create</button>
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
                editmode : false,
                announcements : {},
                form: new Form({
                    id:'',
                    title : '',
                    body : '',
                    featureimage : '',
                    attachment : '',
                })

            }
        },
        methods:{
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
                axios.get('api/announcement?page=' + page)
                .then(response => {
                    this.announcements = response.data;
                });
            },
            newAnnouncement(){
                this.editmode = false;
                this.form.reset();
                $('#lfm').filemanager('image', {prefix: route_prefix});
                $('#lfm2').filemanager('file', {prefix: route_prefix});
                $("#addNewAnnouncement").css("z-index", "1500");
            },
            editAnnouncement(announcement){
                this.editmode = true;
                this.form.reset();
                $('#addNewAnnouncement').modal('show');
                $("#addNewAnnouncement").css("z-index", "1500");
                this.form.fill(announcement);
                $('#holder').attr('src',this.form.featureimage);
                // $('#holder2').attr('src',this.form.attachment);
                $('#lfm').filemanager('image', {prefix: route_prefix});
                $('#lfm2').filemanager('file', {prefix: route_prefix});

            },
            loadAnnouncement(){
                if(this.$gate.isAdmin() || this.$gate.isSKAdmin()){
                    axios.get('api/announcement').then(({data}) => (this.announcements = data));
                }

            },
            updateAnnouncement(){
                this.$Progress.start();
                this.form.featureimage =  $('#thumbnail').val();
                this.form.attachment =  $('#thumbnail2').val();
                this.form.put('api/announcement/'+this.form.id)
                .then(() => {
                    $('#addNewAnnouncement').modal('hide');
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
            deleteAnnouncement(id){
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
                                this.form.delete('api/announcement/'+id).then(()=>{
                                    swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                    );
                                    Fire.$emit('AfterCreate');
                                }).catch(()=> {
                                    swal.fire("Failed!", "There was something wrong.", "warning");
                                });
                         }
                    })
            },
            createAnnouncement(){
                this.$Progress.start();
                this.form.featureimage =  $('#thumbnail').val();
                this.form.attachment =  $('#thumbnail2').val();
                this.form.post('api/announcement')
                .then(()=>{
                    $('#addNewAnnouncement').modal('hide');
                    Fire.$emit('AfterCreate');
                    toast.fire({
                        type: 'success',
                        title: 'Announcements Created in successfully'
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
                axios.get('api/findAnnouncement?q=' + query)
                .then((data) => {
                    this.announcements = data.data
                })
                .catch(() => {

                });
            });
            this.loadAnnouncement();
            Fire.$on('AfterCreate',() => {
                this.loadAnnouncement();
            });

        }
    }

</script>



