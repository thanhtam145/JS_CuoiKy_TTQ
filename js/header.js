var html = `
    <div class="site-mobile-menu">
    <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
        <span class="icon-close2 js-menu-toggle"></span>
        </div>
    </div>
    <div class="site-mobile-menu-body"></div>
    </div>

    <header class="site-navbar py-1" role="banner">
        <div class="container">
            <div class="row align-items-center">
            
                <div class="col-6 col-xl-2">
                    <h1 class="mb-0"><a href="index.html" class="text-black h2 mb-0">Travelers</a></h1>
                </div>

                <div class="col-10 col-md-8 d-none d-xl-block">
                    <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">
                        <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                            <li><a href="index.html">Home</a></li>

                            <li><a href="tour.html">Tour</a></li>
                            
                            <li><a href="discount.html">Discount</a></li>
                            
                            <li><a href="blog.html">Blog</a></li>
                            
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="col-6 col-xl-2 text-right">
                    <div class="d-none d-xl-inline-block">
                        <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                            <li>
                                <a href="#" class="pl-3 pr-3 text-black"><span class="icon-search"></span></a>
                            </li>
                            <li>
                                <a href="#" class="pl-3 pr-3 text-black" onclick="myModal()" data-toggle="modal" data-target="#myModal">
                                    <span class="icon-user"></span>
                                </a>
                            </li>         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
`;

document.getElementById("header").innerHTML = html;