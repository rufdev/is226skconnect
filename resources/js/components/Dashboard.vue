<template>
    <div class="container-fluid">
        <div class="row mt-3" v-if="$gate.isAdmin() || $gate.isSKAdmin() || $gate.isSKMember()">
          <div class="col-lg-3 col-6" v-if="$gate.isAdmin() || $gate.isSKAdmin()" >
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3 v-if="usercount > 0">{{ usercount }}</h3>
                <h3 v-if='usercount === 0 || usercount === ""'>0</h3>

                <p>Users</p>
              </div>
              <div class="icon">
                <i class="fas fa-usercount"></i>
              </div>
              <!-- <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a> -->
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3 v-if="postcount > 0">{{ postcount }}</h3>
                <h3 v-if='postcount === 0 || postcount === ""'>0</h3>

                <p>Posts</p>
              </div>
              <div class="icon">
                <i class="fas fa-blog"></i>
              </div>
              <!-- <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a> -->
            </div>
          </div>

          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3 v-if="memocount > 0">{{ memocount }}</h3>
                <h3 v-if='memocount === 0 || memocount === ""'>0</h3>

                <p>Memos</p>
              </div>
              <div class="icon">
                <i class="fas fa-file"></i>
              </div>
              <!-- <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a> -->
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3 v-if="announcementcount > 0">{{ announcementcount }}</h3>
                <h3 v-if='announcementcount === 0 || announcementcount === ""'>0</h3>

                <p>Announcements</p>
              </div>
              <div class="icon">
                <i class="fas fa-bullhorn"></i>
              </div>
              <!-- <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a> -->
            </div>
          </div>
          <!-- ./col -->
        </div>
        <div class="row mt-3" v-if="$gate.isAdmin() || $gate.isSKAdmin() || $gate.isSKMember()">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header p-2">
                        <ul class="nav nav-pills">
                            <li class="nav-item"><a class="nav-link active show" href="#posts" data-toggle="tab">Blog Posts</a></li>
                            <li class="nav-item"><a class="nav-link" href="#memos" data-toggle="tab">Memos</a></li>
                            <li class="nav-item"><a class="nav-link" href="#announcements" data-toggle="tab">Announcements</a></li>
                        </ul>
                    </div><!-- /.card-header -->
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane active show" id="posts">
                                <div class="post" v-for="post in posts.data" :key="post.id">
                                    <div class="user-block">
                                        <img class="img-circle img-bordered-sm" :src="getProfilePhoto(post.user.photo)" alt="user image">
                                        <span class="username">
                                        <a href="#">{{post.title | upText}}</a>

                                        <button class="float-right btn btn-success" data-toggle="modal" @click="viewModal(post)" data-target="#viewModal"><i class="fas fa-eye fa-fw"></i></button>
                                        </span>
                                        <span class="description">{{post.user.name}} - {{post.created_at | dateFormat}}</span>
                                    </div>
                                    <!-- /.user-block -->
                                    <div v-html="$options.filters.strlimit(post.body)">
                                    </div>

                                </div>
                                <pagination :data="posts" @pagination-change-page="getPostResults"></pagination>
                            </div>
                            <div class="tab-pane" id="memos">
                                <div class="post" v-for="memo in memos.data" :key="memo.id">
                                    <div class="user-block">
                                        <img class="img-circle img-bordered-sm" :src="getProfilePhoto(memo.user.photo)" alt="user image">
                                        <span class="username">
                                        <a href="#">{{memo.title | upText}}</a>

                                        <button class="float-right btn btn-success" data-toggle="modal" @click="viewModal(memo)" data-target="#viewModal"><i class="fas fa-eye fa-fw"></i></button>
                                        </span>
                                        <span class="description">{{memo.user.name}} - {{memo.created_at | dateFormat}}</span>
                                    </div>
                                    <!-- /.user-block -->
                                    <div v-html="$options.filters.strlimit(memo.body)">
                                    </div>

                                </div>
                                <pagination :data="memos" @pagination-change-page="getMemoResults"></pagination>
                            </div>
                            <div class="tab-pane" id="announcements">
                                <div class="post" v-for="announcement in announcements.data" :key="announcement.id">
                                    <div class="user-block">
                                        <img class="img-circle img-bordered-sm" :src="getProfilePhoto(announcement.user.photo)" alt="user image">
                                        <span class="username">
                                        <a href="#">{{announcement.title | upText}}</a>

                                        <button class="float-right btn btn-success" data-toggle="modal" @click="viewModal(announcement)" data-target="#viewModal"><i class="fas fa-eye fa-fw"></i></button>
                                        </span>
                                        <span class="description">{{announcement.user.name}} - {{announcement.created_at | dateFormat}}</span>
                                    </div>
                                    <!-- /.user-block -->
                                    <div v-html="$options.filters.strlimit(announcement.body)">
                                    </div>

                                </div>
                                <pagination :data="announcements" @pagination-change-page="getAnnouncementResults"></pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <!-- Modal -->
        <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="viewModalLabel">{{ content.title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body report-modal-body">
                        <div v-html="content.body"></div>
                    </div>
                    <div class="modal-footer">
                        <p v-if="content.attachment">
                            You may download the file here: <a :href="content.attachment" download> Click here to download </a>
                        </p>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!($gate.isAdmin() || $gate.isSKAdmin() || $gate.isSKMember())">
            <not-found></not-found>
        </div>
    </div>

</template>

<script>
    export default {
         data() {
            return {
                postcount : 0,
                memocount : 0,
                usercount : 0,
                announcementcount : 0,
                posts : {},
                memos : {},
                users : {},
                announcements : {},
                content : [],
            }
        },
        methods : {
            viewModal(content){
                $('#viewModal').modal('show');
                $("#viewModal").css("z-index", "1500");
                this.content = content;
            },
            getPostResults(page = 1) {
                axios.get('api/post?page=' + page)
                .then(response => {
                    this.posts = response.data;
                });
            },
            getMemoResults(page = 1) {
                axios.get('api/memo?page=' + page)
                .then(response => {
                    this.memos = response.data;
                });
            },
            getAnnouncementResults(page = 1) {
                axios.get('api/announcement?page=' + page)
                .then(response => {
                    this.announcements = response.data;
                });
            },
            getProfilePhoto(userphoto){
                let photo = userphoto ? "img/profile/"+ userphoto : "img/logo.png";
                return photo;
            },
            countUsers(){
                axios.get('api/countUser').then(({data}) => (this.usercount = data));
            },
            countPosts(){
                axios.get('api/countPost').then(({data}) => (this.postcount = data));
            },
            countMemos(){
                axios.get('api/countMemo').then(({data}) => (this.memocount = data));
            },
            countAnnouncements(){
                axios.get('api/countAnnouncement').then(({data}) => (this.announcementcount = data));
            },


            loadUsers(){
                axios.get('api/user').then(({data}) => (this.users = data));
            },
            loadPosts(){
                axios.get('api/getallpost').then(({data}) => (this.posts = data));
            },
            loadMemos(){
                axios.get('api/memo').then(({data}) => (this.memos = data));
            },
            loadAnnouncements(){
                axios.get('api/announcement').then(({data}) => (this.announcements = data));
            },
        },
        created() {
            if (this.$gate.isAdmin() || this.$gate.isSKAdmin()){
                this.countUsers();
            }
            this.countPosts();
            this.countMemos();
            this.countAnnouncements();

            this.loadUsers();
            this.loadPosts();
            this.loadMemos();
            this.loadAnnouncements();


        }
    }
</script>
<style>
.report-modal-body {
    max-height:calc(100vh - 150px);
    overflow-y:auto;
    overflow-x:auto;
    white-space:pre;
    font-family:monospace;
}
</style>
