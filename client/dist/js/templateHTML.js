angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('templates/login/login.html','<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <title>Title</title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>');
$templateCache.put('templates/main/main.html','<!-- header -->\r\n<header id="header" class="app-header navbar" role="menu">\r\n    <!-- navbar header -->\r\n    <div class="navbar-header bg-dark">\r\n        <button class="pull-right visible-xs dk" ui-toggle-class="show" target=".navbar-collapse">\r\n            <i class="glyphicon glyphicon-cog"></i>\r\n        </button>\r\n        <button class="pull-right visible-xs" ui-toggle-class="off-screen" target=".app-aside" ui-scroll="app">\r\n            <i class="glyphicon glyphicon-align-justify"></i>\r\n        </button>\r\n        <!-- brand -->\r\n        <a href="#/" class="navbar-brand text-lt">\r\n            <i class="fa fa-btc"></i>\r\n            <span class="hidden-folded m-l-xs">AngularJs</span>\r\n        </a>\r\n        <!-- / brand -->\r\n    </div>\r\n    <!-- / navbar header -->\r\n\r\n    <!-- navbar collapse -->\r\n    <div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">\r\n        <!-- buttons -->\r\n        <div class="nav navbar-nav hidden-xs">\r\n            <a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="app-aside-folded" target=".app">\r\n                <i class="fa fa-dedent fa-fw text"></i>\r\n                <i class="fa fa-indent fa-fw text-active"></i>\r\n            </a>\r\n            <a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="show" target="#aside-user">\r\n                <i class="icon-user fa-fw"></i>\r\n            </a>\r\n        </div>\r\n        <!-- / buttons -->\r\n\r\n        <!-- link and dropdown -->\r\n        <ul class="nav navbar-nav hidden-sm">\r\n            <li class="dropdown pos-stc">\r\n                <a href="#" data-toggle="dropdown" class="dropdown-toggle">\r\n                    <span>Mega</span>\r\n                    <span class="caret"></span>\r\n                </a>\r\n                <div class="dropdown-menu wrapper w-full bg-white">\r\n                    <div class="row">\r\n                        <div class="col-sm-4">\r\n                            <div class="m-l-xs m-t-xs m-b-xs font-bold">Pages <span class="badge badge-sm bg-success">10</span></div>\r\n                            <div class="row">\r\n                                <div class="col-xs-6">\r\n                                    <ul class="list-unstyled l-h-2x">\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Profile</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Post</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Search</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Invoice</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class="col-xs-6">\r\n                                    <ul class="list-unstyled l-h-2x">\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Price</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Lock screen</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Sign in</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Sign up</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-sm-4 b-l b-light">\r\n                            <div class="m-l-xs m-t-xs m-b-xs font-bold">UI Kits <span class="label label-sm bg-primary">12</span></div>\r\n                            <div class="row">\r\n                                <div class="col-xs-6">\r\n                                    <ul class="list-unstyled l-h-2x">\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Buttons</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Icons <span class="badge badge-sm bg-warning">1000+</span></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Grid</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Widgets</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class="col-xs-6">\r\n                                    <ul class="list-unstyled l-h-2x">\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Bootstap</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Sortable</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Portlet</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=""><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Timeline</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-sm-4 b-l b-light">\r\n                            <div class="m-l-xs m-t-xs m-b-sm font-bold">Analysis</div>\r\n                            <div class="text-center">\r\n                                <div class="inline">\r\n                                    <div ui-jq="easyPieChart" ui-options="{\r\n                          percent: 65,\r\n                          lineWidth: 50,\r\n                          trackColor: \'#e8eff0\',\r\n                          barColor: \'#23b7e5\',\r\n                          scaleColor: false,\r\n                          size: 100,\r\n                          rotate: 90,\r\n                          lineCap: \'butt\',\r\n                          animate: 2000\r\n                        }" class="easyPieChart" style="width: 100px; height: 100px; line-height: 100px;">\r\n                                        <canvas width="100" height="100"></canvas></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class="dropdown">\r\n                <a href="#" data-toggle="dropdown" class="dropdown-toggle">\r\n                    <i class="fa fa-fw fa-plus visible-xs-inline-block"></i>\r\n                    <span translate="header.navbar.new.NEW">New</span> <span class="caret"></span>\r\n                </a>\r\n                <ul class="dropdown-menu" role="menu">\r\n                    <li><a href="#" translate="header.navbar.new.PROJECT">Projects</a></li>\r\n                    <li>\r\n                        <a href="">\r\n                            <span class="badge bg-info pull-right">5</span>\r\n                            <span translate="header.navbar.new.TASK">Task</span>\r\n                        </a>\r\n                    </li>\r\n                    <li><a href="" translate="header.navbar.new.USER">User</a></li>\r\n                    <li class="divider"></li>\r\n                    <li>\r\n                        <a href="">\r\n                            <span class="badge bg-danger pull-right">4</span>\r\n                            <span translate="header.navbar.new.EMAIL">Email</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        <!-- / link and dropdown -->\r\n\r\n        <!-- nabar right -->\r\n        <ul class="nav navbar-nav navbar-right">\r\n            <li class="dropdown">\r\n                <a href="#" data-toggle="dropdown" class="dropdown-toggle">\r\n                    <i class="icon-bell fa-fw"></i>\r\n                    <span class="visible-xs-inline">Notifications</span>\r\n                    <span class="badge badge-sm up bg-danger pull-right-xs">2</span>\r\n                </a>\r\n                <!-- dropdown -->\r\n                <div class="dropdown-menu w-xl animated fadeInUp">\r\n                    <div class="panel bg-white">\r\n                        <div class="panel-heading b-light bg-light">\r\n                            <strong>You have <span>2</span> notifications</strong>\r\n                        </div>\r\n                        <div class="list-group">\r\n                            <a href="" class="list-group-item">\r\n                                <span class="clear block m-b-none">\r\n                      Use awesome animate.css<br>\r\n                      <small class="text-muted">10 minutes ago</small>\r\n                    </span>\r\n                            </a>\r\n                            <a href="" class="list-group-item">\r\n                    <span class="clear block m-b-none">\r\n                      1.0 initial released<br>\r\n                      <small class="text-muted">1 hour ago</small>\r\n                    </span>\r\n                            </a>\r\n                        </div>\r\n                        <div class="panel-footer text-sm">\r\n                            <a href="" class="pull-right"><i class="fa fa-cog"></i></a>\r\n                            <a href="#notes" data-toggle="class:show animated fadeInRight">See all the notifications</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- / dropdown -->\r\n            </li>\r\n            <li class="dropdown">\r\n                <a href="#" data-toggle="dropdown" class="dropdown-toggle clear">\r\n                    <span class="hidden-sm hidden-md">John.Smith</span> <b class="caret"></b>\r\n                </a>\r\n                <!-- dropdown -->\r\n                <ul class="dropdown-menu animated fadeInRight w">\r\n                    <li class="wrapper b-b m-b-sm bg-light m-t-n-xs">\r\n                        <div>\r\n                            <p>300mb of 500mb used</p>\r\n                        </div>\r\n                        <div class="progress progress-xs m-b-none dker">\r\n                            <div class="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="50%" style="width: 50%"></div>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <a href="">\r\n                            <span class="badge bg-danger pull-right">30%</span>\r\n                            <span>Settings</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a ui-sref="app.page.profile">Profile</a>\r\n                    </li>\r\n                    <li>\r\n                        <a ui-sref="app.docs">\r\n                            <span class="label bg-info pull-right">new</span>\r\n                            Help\r\n                        </a>\r\n                    </li>\r\n                    <li class="divider"></li>\r\n                    <li>\r\n                        <a ui-sref="access.signin">Logout</a>\r\n                    </li>\r\n                </ul>\r\n                <!-- / dropdown -->\r\n            </li>\r\n        </ul>\r\n        <!-- / navbar right -->\r\n    </div>\r\n    <!-- / navbar collapse -->\r\n</header>\r\n<!-- / header -->\r\n\r\n\r\n<!-- aside -->\r\n<aside id="aside" class="app-aside hidden-xs bg-dark">\r\n    <div class="aside-wrap">\r\n        <div class="navi-wrap">\r\n            <!-- nav -->\r\n            <nav class="navi clearfix">\r\n                <ul class="nav" ></ul>\r\n            </nav>\r\n            <!-- nav -->\r\n\r\n            <!-- aside footer -->\r\n            <div class="wrapper m-t">\r\n            </div>\r\n            <!-- / aside footer -->\r\n        </div>\r\n    </div>\r\n</aside>\r\n<!-- / aside -->\r\n\r\n\r\n<!-- content -->\r\n<div class="app-content" >\r\n    <div class="app-content-body app-content-full" data-ui-view="content">\r\n        {{totalItems}}}\r\n    </div>\r\n</div>\r\n<!-- /content -->\r\n\r\n<!-- footer -->\r\n<footer id="footer" class="app-footer" role="footer">\r\n    <div class="wrapper b-t bg-light">\r\n        <span class="pull-right">0.0.1</span>\r\n        \xA9 Copyright 2009-2018 XXXXX</div>\r\n</footer>\r\n<!-- / footer -->');}]);