<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>SK Connect - Dashboard</title>
        <link rel="stylesheet" href="/css/app.css" />
        <link rel="icon" type="image/png" href="{{ URL::asset('img/sklogo.png') }}">
    </head>
    <body class="hold-transition sidebar-mini">
        <div class="wrapper" id="app">
            <!-- Navbar -->
            <nav
                class="main-header navbar navbar-expand bg-white navbar-light border-bottom"
            >
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#"
                            ><i class="fa fa-bars"></i
                        ></a>
                    </li>
                </ul>

                <!-- SEARCH FORM -->
                <div class="form-inline ml-3">
                    <div class="input-group input-group-sm">
                        <input
                            class="form-control form-control-navbar"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            v-model="search"
                            @keyup="searchgrid"
                        />
                        <div class="input-group-append">
                            <button class="btn btn-navbar" @click="searchgrid">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- /.navbar -->

            <!-- Main Sidebar Container -->
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <!-- Brand Logo -->
                <a href="/dashboard" class="brand-link">
                    <img
                        src="{{ URL::asset('img/sklogo.png') }}"
                        alt="SK Logo"
                        class="brand-image img-circle elevation-3"
                        style="opacity: .8"
                    />
                    <span class="brand-text font-weight-light">SK Connect</span>
                </a>

                <!-- Sidebar -->
                <div class="sidebar">
                    <!-- Sidebar user panel (optional) -->
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            @if(Auth::user()->photo)
                            <img
                                src="{{ URL::asset('img/profile/'.Auth::user()->photo) }}"
                                class="img-circle elevation-2"
                                alt="User Image"
                            />
                            @else
                                <img
                                src="{{ URL::asset('img/sklogo.png') }}"
                                class="img-circle elevation-2"
                                alt="User Image"
                            />
                            @endif
                        </div>
                        <div class="info">
                            <a href="#" class="d-block">
                                {{Auth::user()->name}}
                                <p>{{Auth::user()->role->name}}</p>
                            </a>
                        </div>
                    </div>

                    <!-- Sidebar Menu -->
                    <nav class="mt-2">
                        <ul
                            class="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

                            <li class="nav-item">
                                <router-link to="/dashboard" class="nav-link">
                                    <i class="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/post" class="nav-link">
                                    <i class="nav-icon fas fa-blog"></i>
                                    <p>
                                        Blog Posts
                                    </p>
                                </router-link>
                            </li>
                            @canany(['isAdmin', 'isSKAdmin'])
                            <li class="nav-item">
                                <router-link to="/memo" class="nav-link">
                                    <i class="nav-icon fas fa-file"></i>
                                    <p>
                                        Memo
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/announcement" class="nav-link">
                                    <i class="nav-icon fas fa-bullhorn"></i>
                                    <p>
                                        Announcement
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/filemanagement" class="nav-link">
                                    <i class="nav-icon fas fa-folder"></i>
                                    <p>
                                        File Management
                                    </p>
                                </router-link>
                            </li>
                            @endcanany
                            @canany(['isAdmin', 'isSKAdmin'])
                            <li class="nav-item has-treeview">
                                <a href="#" class="nav-link">
                                    <i
                                        class="nav-icon fas fa-cogs"
                                    ></i>
                                    <p>
                                        Management
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <router-link to="/users" class="nav-link ">
                                            <i
                                                class="nav-icon fas fa-users text-blue"
                                            ></i>
                                            <p>Users</p>
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/roles" class="nav-link ">
                                            <i
                                                class="nav-icon fas fa-key text-blue"
                                            ></i>
                                            <p>Roles</p>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            @endcanany
                            <li class="nav-item">
                                <router-link to="/profile" class="nav-link">
                                    <i class="nav-icon fas fa-user"></i>
                                    <p>
                                        Profile
                                    </p>
                                </router-link>
                            </li>
                            @can('isAdmin')
                            <li class="nav-item">
                                <router-link to="/developer" class="nav-link">
                                    <i class="nav-icon fas fa-cogs text-blue" ></i>
                                    <p>
                                        Developer
                                    </p>
                                </router-link>
                            </li>
                            @endcan
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                    <i class="nav-icon fas fa-power-off text-red"></i>
                                    <p>
                                    {{ __('Logout') }}
                                    </p>
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </li>
                        </ul>
                    </nav>
                    <!-- /.sidebar-menu -->
                </div>
                <!-- /.sidebar -->
            </aside>

            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">

                <!-- Main content -->
                <div class="content">
                    <div class="container-fluid">
                        <router-view></router-view>
                        <vue-progress-bar></vue-progress-bar>
                        <!-- /.row -->
                    </div>
                    <!-- /.container-fluid -->
                </div>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->

            <!-- Main Footer -->
            <footer class="main-footer">
                <!-- To the right -->
                <div class="float-right d-none d-sm-inline">
                    Administrator Panel
                </div>
                <!-- Default to the left -->
                <strong
                    >Copyright &copy; 2019-2020
                    SK Connect
                All rights reserved.
            </footer>
        </div>
        <!-- ./wrapper -->
        <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
        @auth
        <script>
            window.user = @json(auth()->user());
            let route_prefix = '/laravel-filemanager';
            window.tinymce = tinymce;
        </script>
        @endauth
    </body>
    <script src="/js/app.js"></script>


</html>
