jQuery(document).ready(function() {
    "use strict";

    /* -------- Appears Menu 滚动显示scroll ------ */
    $(window).on('ready , scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('.main-menu').addClass('minified');
        } else {
            $('.main-menu').removeClass('minified');
        }
    });

    /* ---------- Hide Menu-------- */
    jQuery(".nav a").on("click", function () {
        jQuery("#nav-menu").removeClass("in").addClass("collapse");
    });

    /*--------------底部切换-------------*/
    $('.contact div').mouseover(function(){
        $('.contact div').removeClass('active');
        $(this).addClass('active');
        $('footer .content p').removeClass('active');
        $("footer .content p:eq("+ $(this).index() +")").addClass('active');
    })

    //瀑布流
    var $container = $('#masonry');
    $container.imagesLoaded(function() {
        $container.masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            // use element for option
            columnWidth: '.grid-item',
            // percentPosition: true,
            isFitWidth: true,
            isAnimated: true,
        });
    });

    var data=[
        {image:'../assets/images/news/news_6_1.jpg',position_x:'-239px',position_y:'-237px',date:'2016-10-28',title:'云核网络2016年度员工体检工作顺利进行！',content:'公司为保障员工身体健康，完善员工福利保障，体现“以人为本”的健康理念，云核网络2016年度员工体检活动已于9月底正式启动，员工体检工作已在各地区陆续开展中，各项目组员工也陆续进行了体检。'},
        {date:'2016-10-21',title:'云核网络中标昆山农村商业银行互联网统一支付平台项目',content:'近年来，随着互联网金融的不断发展，在基于互联网的个人金融服务中，线上支付业务是发展最快的服务。随着互联网的普及和网络安全技术的迅速完善，它凭借着其便捷和易用的优势在电子商务的支付手段中日益成为一个主要的支付手段。'},
        {date:'2016-10-20',title:'云核网络承建平安银行网上银行及手机银行安全输入系统国密化改造工作',content:'人民银行、国家密码管理局、发改委、银监会、工信部、公安部等11个部委联合于2012年年中制定了《金融信息系统国产密码应用推广实施方案》，要求按照“总体规范、重点突破、分布实施、稳步推进”的原则，坚持统筹协调、分工负责、科学摆布、平稳过渡、持续发展，又好又快地推进国产密码在金融领域的全面应用，切实提升金融信息安全自主可控能力。在7月底，人民银行召开专项会议，向全国政策性银行、商业银行等金融机构传达了《金融信息系统国产密码应用推广实施方案》，要求各金融机构启动信息系统国产密码应用相关工作。'},
        {date:'2016-09-18',title:'云核网络助力昆山农商行打造自主可控的KAAP应用开发平台'},
        {date:'2016-09-18',title:'云核iHolder网银管家云服务系统获得计算机软件著作权登记证书'},
        {image:'../assets/images/news/news_11.png',position_x:'-30px',position_y:'-578px',date:'2016-09-12',title:'2016中秋快乐'},

        {date:'2016-08-17',title:'云核网络承建汉口银行统一消息中心项目',content:'汉口银行统一消息中心项目主要实施功能点分为统一信息推送功能、通道管理功能、消息管理、客户签约管理、模板管理、黑名单管理、数据迁移、动账通知，此次项目实施，为保证项目保质保量的完成，项目主要分为 2 个阶段来进行实施，预计2016年12月正式上线。'},
        {date:'2016-08-05',title:'云核网络与紫金农村商业银行签署2016年下半年手机银行现场服务合同',content:'云核网络出色完成了紫金农村商业银行2016年上半年手机银行现场服务，受到行领导的一致肯定和好评，并于2016年8月3日签署了2016年下半年手机银行现场服务合同，相信通过云核网络现场服务人员的不懈努力，将会使紫金农商银行手机银行在功能、性能上均有较大提升！     '},
        {date:'2016-08-03',title:'云核网络中标鄞州银行手机银行改版项目',content:'鄞州银行为实现电子银行业务再次转型，搭建起移动应用平台级产品，突破原有手机银行需线下获客的瓶颈，积极应对移动互联网的挑战，抢占II类账户全面放开的先机，对鄞州银行现有手机银行进行改版。改版后的手机银行将实现从渠道类产品向平台类产品转变、从服务类产品向营销类产品的转变。'},
        {date:'2016-07-29',title:'云核JAVA应用开发平台软件V2.0获得计算机软件著作权登记证书'},
    ];
    var cloudcore_New=[
        {date:'2014-08-07',title:'云核网络与昆仑天地签署技术咨询服务合同',content:' 近日，云核网络与昆仑天地签署技术咨询服务合同，云核网络将为昆仑天地提供大数据情况下的应用服务架构与安全体系建设的技术咨询服务。'},
        {image:'../assets/images/news/news_45.png',date:'2014-07-17',title:'云核网络成功获得《商用密码产品销售许可证》资质',content:' 云核网络通过国家密码管理局审核，获得商用密码产品销售许可证。'},
        {image:'../assets/images/news/news_46.png',date:'2014-05-27',title:'云核网络北京公司首次Team Building活动',content:'5月25日，云核网络北京公司在美丽的云蒙山开展了首次Team Building活动。'},
        {image:'../assets/images/news/news_47.png',date:'2014-05-19',title:'CloudCore国密浏览器获得计算机软件著作权登记证书',content:'云核网络CloudCore国密浏览器获得国家版权局《计算机软件著作权登记证书》。'},
        {image:'../assets/images/news/news_48_1.png',date:'2014-05-17',title:'cToken动态令牌软件获得计算机软件著作权登记证书',content:'云核网络cToken动态令牌软件 v2014 （Android、iOS版本）获得国家版权局《计算机软件著作权登记证书》。'},
        {image:'../assets/images/news/news_49.jpg',date:'2012-12-17',title:'银盾思创通过北京软件行业协会软件企业认定',content:' 2012年12月17日，北京银盾思创网络技术有限公司通过北京软件行业协会软件企业认定，并获得软件企业认定证书。'},

        {image:'../assets/images/news/news_50.jpg',date:'2012-12-17',title:'银盾思创SA-iSecurity客户端安全输入系统获得软件产品登记证书',content:'2012年12月17日，北京银盾思创网络技术有限公司SA-iSecurity客户端安全输入系统通过北京软件行业协会国产软件产品登记，并获得软件产品登记证书。'},
        {date:'2012-12-03',title:'银盾思创为福建海峡银行提供Windows安全输入解决方案',content:'2012年12月3日，北京银盾思创网络技术有限公司与福建海峡银行签订合同，为福建海峡银行的网上银行系统提供Windows平台安全输入解决方案。'},
        {image:'../assets/images/news/news_52.jpg',date:'2012-11-22',title:'银盾思创获得国家密码管理局颁发的商用密码产品生产定点单位证书',content:' 2012年11月22日，国家密码管理局指定北京银盾思创网络技术有限公司为商用密码产品生产定点单位，并颁发证书。'},
        {date:'2012-11-13',title:'银盾思创为徽商银行提供Windows安全输入解决方案',content:'2012年11月13日，北京银盾思创网络技术有限公司与徽商银行签订合同，为徽商银行的网上银行系统提供Windows平台安全输入解决方案'},
        {date:'2012-11-01',title:'银盾思创为江苏吴江农村商业银行提供“网银管家”开发服务',content:'2012年11月1日，北京银盾思创网络技术有限公司与江苏吴江农村商业银行股份有限公司签订合同，为江苏吴江农村商业银行的网上银行系统提供“网银管家”开发服务。'},
        {date:'2012-10-30',title:'银盾思创为江苏吴江农村商业银行股份有限公司提供Windows安全输入解决方案',content:'2012年10月30日，北京银盾思创网络技术有限公司与江苏吴江农村商业银行股份有限公司签订合同，为江苏吴江农村商业银行的网上银行系统提供Windows平台安全输入解决方案。'},
        {date:'2012-10-16',title:'银盾思创携手上海CA为上海付费通信息服务有限公司提供Windows安全输入解决方案',content:'2012年10月16日，北京银盾思创网络技术有限公司携手上海数字证书认证中心有限公司，为上海付费通信息服务有限公司承建的政府便民实事项目“付费通”提供Windows平台安全输入解决方案。'},
        {date:'2012-08-30',title:'银盾思创为江阴农商银行提供Windows安全输入解决方案',content:'2012年10月16日，2012年8月30日，北京银盾思创网络技术有限公司与江阴农商银行签订合同，为江阴农商银行的网上银行系统提供Windows平台安全输入解决方案。'},
    ]
    var n=1;
    //滑动到底部加载更多
    $(window).scroll(function() {
        var max=Math.ceil(data.length/6);
        var scrollTop=$(this).scrollTop();
        var windowHeight=$(this).height();
        var scrollHeight=$(document).height();
        // if (scrollTop + windowHeight >= scrollHeight-170 && n<=max){
        if (scrollTop + windowHeight == scrollHeight){
            var html='';
            var len=data.length-(6*n-6)>=6 ? 6*n : 6*(n-1)+data.length-(6*n-6);
            for(var i=6*n-6;i<len;i++){
                var cur=data[i];
                if(cur.image&&cur.content){
                    var imageUrl=cur.image;
                    html+='<div class="grid-item news-topDate">' +
                        '                <div style="background: url('+imageUrl+');width: 314px;height:180px;background-position: '+cur.position_x+' '+cur.position_y+'"></div>' +
                        '                <p>' +
                        '                    <b>'+cur.date.substr(8,2)+'</b>' +
                        '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                        '                </p>' +
                        '                <div>' +
                        '                    <h4>'+cur.title+'</h4>' +
                        '                    <p class="multiline"> '+cur.content+'</p>' +
                        '                    <div><a href="">查看详情</a></div>' +
                        '                </div>' +
                        '            </div>';
                }else if(cur.image && !cur.content){
                    var imageUrl=cur.image;
                    html+='<div class="grid-item news-topDate">' +
                        '                <div style="background: url('+imageUrl+');width: 314px;height:180px;background-position: '+cur.position_x+' '+cur.position_y+'"></div>' +
                        '                <p>' +
                        '                    <b>'+cur.date.substr(8,2)+'</b>' +
                        '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                        '                </p>' +
                        '                <div>' +
                        '                    <h4>'+cur.title+'</h4>' +
                        '                    <div><a href="">查看详情</a></div>' +
                        '                </div>' +
                        '            </div>';
                }else if(!cur.image && cur.content){
                    html+='<div class="grid-item">' +
                        '                <p>' +
                        '                    <b>'+cur.date.substr(8,2)+'</b>' +
                        '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                        '                </p>' +
                        '                <div>' +
                        '                    <h4>'+cur.title+'</h4>' +
                        '                    <p class="multiline"> '+cur.content+'</p>' +
                        '                    <div><a href="">查看详情</a></div>' +
                        '                </div>' +
                        '            </div>';
                }else{
                    html+='<div class="grid-item">' +
                        '                <p>' +
                        '                    <b>'+cur.date.substr(8,2)+'</b>' +
                        '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                        '                </p>' +
                        '                <div>' +
                        '                    <h4>'+cur.title+'</h4>' +
                        '                    <div><a href="">查看详情</a></div>' +
                        '                </div>' +
                        '            </div>';
                }
            }

            var $items=$(html);
            $container.append( $items );
            $container.imagesLoaded(function() {//图片加载完成之后再渲染新加的块儿
                $container.masonry( 'appended', $items ,true)
                    .masonry('reloadItems');
            });
            clampTxt();
            n++;
        }
    });

    //只显示四行文本，显示不下就显示...
    function clampTxt(){
        var nodes=document.getElementsByClassName("multiline");
        for(var i=0;i<nodes.length;i++){
            $clamp(nodes[i],{clamp:4});
        }
    }
    clampTxt();


});
