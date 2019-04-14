<template>
    <div class="container-fluid">
            <!-- <not-found></not-found> -->
          <div class="row mt-3" v-if="$gate.isAdmin() || $gate.isSKAdmin() || $gate.isSKMember()">
          <div class="col-lg-3 col-6" v-if="$gate.isAdmin() || $gate.isSKAdmin()" >
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3 v-if="users > 0">{{ users }}</h3>
                <h3 v-if='users === 0 || users === ""'>0</h3>

                <p>Users</p>
              </div>
              <div class="icon">
                <i class="fas fa-users"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3 v-if="posts > 0">{{ posts }}</h3>
                <h3 v-if='posts === 0 || posts === ""'>0</h3>

                <p>Posts</p>
              </div>
              <div class="icon">
                <i class="fas fa-blog"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3 v-if="memos > 0">{{ memos }}</h3>
                <h3 v-if='memos === 0 || memos === ""'>0</h3>

                <p>Memos</p>
              </div>
              <div class="icon">
                <i class="fas fa-file"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3 v-if="announcements > 0">{{ announcements }}</h3>
                <h3 v-if='announcements === 0 || announcements === ""'>0</h3>

                <p>Announcements</p>
              </div>
              <div class="icon">
                <i class="fas fa-bullhorn"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
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
                posts : 0,
                memos : 0,
                users : 0,
                announcements : 0
            }
        },
        methods : {
             loadUsers(){
                axios.get('api/countUser').then(({data}) => (this.users = data));
            },
            loadPosts(){
                axios.get('api/countPost').then(({data}) => (this.posts = data));
            },
            loadMemos(){
                axios.get('api/countMemo').then(({data}) => (this.memos = data));
            },
            loadAnnouncements(){
                axios.get('api/countAnnouncement').then(({data}) => (this.announcements = data));
            }
        },
        created() {
            if (this.$gate.isAdmin() || this.$gate.isSKAdmin()){
                this.loadUsers();
            }
            this.loadPosts();
            this.loadMemos();
            this.loadAnnouncements();

        }
    }
</script>
