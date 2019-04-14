<template>
    <div class="container-fluid">
            <!-- <not-found></not-found> -->
          <div class="row mt-3" v-if="$gate.isAdmin() || $gate.isSKAdmin()">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>150</h3>

                <p>New Orders</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53<sup style="font-size: 20px">%</sup></h3>

                <p>Bounce Rate</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>44</h3>

                <p>User Registrations</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
        <div v-if="!($gate.isAdmin() || $gate.isSKAdmin())">
            <not-found></not-found>
        </div>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                posts : {},
                memos : {},
                users : {},
                announcements : {}
            }
        },
        methods : {
            loadPosts(){
                if(this.$gate.isAdmin() || this.$gate.isSKAdmin()){
                    axios.get('api/post').then(({data}) => (this.posts = data));
                }

            },
            loadMemos(){
                if(this.$gate.isAdmin() || this.$gate.isSKAdmin()){
                    axios.get('api/post').then(({data}) => (this.posts = data));
                }

            },
            loadUsers(){
                if(this.$gate.isAdmin() || this.$gate.isSKAdmin()){
                    axios.get('api/post').then(({data}) => (this.posts = data));
                }

            },
            loadAnnouncements(){
                if(this.$gate.isAdmin() || this.$gate.isSKAdmin()){
                    axios.get('api/post').then(({data}) => (this.posts = data));
                }

            }
        },
        created() {
            this.loadPosts();
            this.loadMemos();
            this.loadUsers();
            this.loadAnnouncements();

        }
    }
</script>
