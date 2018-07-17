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
    });

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

        {date:'2016-05-13',title:'云核iSign数字签名控件系统(Windows版)获得计算机软件著作权登记证书'},
        {date:'2016-05-13',title:'云核客户端网银安全服务软件（Windows版）获得计算机软件著作权登记证书'},
        {image:'../assets/images/news/news_18_1.png',position_x:'-189px',position_y:'-470px',date:'2016-01-16',title:'云核网络2015年“感谢有你 ? 共同成长”主题年会圆满结束',content:'云核网络2015年“感谢有你·共同成长”主题年会于2016年1月10日在无锡太湖风景区圆满结束，会议中云核网络公司总经理戴林巧先生致辞，副总经理罗勇先生做2015年度工作总结报告，同时本次年会还对2015年度优秀员工进行了表彰。'},
        {image:'../assets/images/news/news_19.jpg',position_x:'-196px',position_y:'-227px',date:'2016-01-09',title:'感谢有你 ? 共同成长 ——暨云核网络2015年员工表彰大会如期召开',content:'  云核网络2015年员工表彰大会于2016年1月9日在无锡太湖顺利召开，根据前期优秀员工评选活动，本次共产生10名优秀员工。'},
        {image:'../assets/images/news/news_20_2.png',position_x:'-127px',position_y:'-167px',date:'2016-01-08',title:'云核客户端安全输入系统（MacOS版）获得计算机软件著作权登记证书'},
        {date:'2016-01-07',title:'云核客户端安全输入系统（MacOS版）获得计算机软件著作权登记证书'},
        {image:'../assets/images/news/news_22.jpg',position_x:'-469px',position_y:'-392px',date:'2015-12-16',title:'云核网络与昆山农商银行建立战略合作伙伴关系'},
        {image:'../assets/images/news/news_23.png',position_x:'-218px',position_y:'-610px',date:'2015-11-09',title:'人人参与消防-共创和谐安'},
        {date:'2015-10-20',title:'云核网络中标宁波市资金清算中心移动金融公共服务平台跨行移动支付平台项目',content:' 为贯彻落实人民银行宁波市中心支行关于建设“宁波普惠金融综合示范区”的工作部署，构建“全面覆盖、重点渗透、服务便利、信用完善、权益保障”的普惠金融体系，在全面深化改革背景下推进宁波市金融业的转型升级。'},
        {date:'2015-10-19',title:'云核网络进驻宁波银行为其提供专业的技术服务',content:'团队精英、技术领先、懂核心、懂直销、懂安全、懂规划'},
        {image:'../assets/images/news/news_26_1.png',position_x:'-30px',position_y:'-658px',date:'2015-09-22',title:'中秋发福利，送健康送好礼——云核网络祝全体员工中秋快乐！！'},
        {image:'../assets/images/news/news_27_1.jpg',position_x:'-177px',position_y:'-100px',date:'2015-08-21',title:'云核网络顺利通过ISO 9001质量管理体系认证年审'},
        {date:'2015-07-30',title:'云核客户端安全输入系统顺利通过计算机病毒防治产品检验中心安全检验'},
        {image:'../assets/images/news/news_29_1.jpg',position_x:'-123px',position_y:'-172px',date:'2015-07-23',title:'云核客户端安全输入系统顺利通过银行卡检测中心安全测试'},

        {image:'../assets/images/news/news_30_1.png',position_x:'-123px',position_y:'-172px',date:'2015-07-23',title:'云核WEB安全输入系统顺利通过银行卡检测中心安全测试'},
        {date:'2015-06-19',title:'云核网络中标太仓农村商业银行手机银行项目',content:'  随着智能手机的普及，传统金融服务模式正受着前所未有的冲击。几乎人人都可通过安装手机银行客户端，将手机变成一个7x24小时提供服务并能随身携带的手机银行, 随时随地体验金融服务，享受移动商圈及移动支付等带来的优惠与便利。 '},
        {date:'2015-05-20',title:'云核客户端安全输入系统获得计算机软件著作权登记证书'},
        {date:'2015-04-27',title:'云核网络中标江阴农村商业银行网银管家系统阿里云服务建设项目',content:' 网银管家系统是一个可以防止钓鱼、可以管理网银入口，可以简化网银环境设置的客户端程序。它在对网银客户端进行安全增强的同时，还降低了网银对用户的使用要求，从而使得用户在使用网银时既放心又舒心。'},
        {date:'2015-04-23',title:'云核网络中标鄞州银行支付平台与直销银行项目',content:'  鄞州银行顺应互联网金融的发展潮流，建设支付平台与直销银行系统，建设时间与时机恰到好处。支付服务是互联网金融的基础，是充值、提现的基础，是购买宝宝类产品的基础，是网上购物的基础，更是打造O2O闭环中的核心。在支付服务中引入电子账户可以为实现各类O2O支付服务场景提供基础。对某些存在顾虑的客户，通过设立独立的电子账户也可以达到控制资金风险的目的。本项目的特色在于将支付服务与电子账户有机结合，可以为客户提供基于电子账户的快捷支付服务。'},
        {date:'2015-03-01',title:'云核Java应用开发平台（Athena）获得计算机软件著作权登记证书',content:' Athena基于动态服务技术和SOA架构，提供了轻量级动态服务运行及管理引擎，支持基于云的服务架构，提供真正意义的SOA 架构的成熟开发框架。它向开发者提供了业务服务动态模块化、面向服务构架、模块扩展支持及全异步的通讯服务支持，适用于各类交易系统、管理系统、渠道系统的开发和运行。'},
        {date:'2015-01-30',title:'云核网络为北京众联财富投资有限公司打造线上平台系统',content:' 云核网络为北京众联财富投资有限公司打造众联财富线上平台销售系统 。         '},
        {date:'2015-01-07',title:'云核WEB安全输入系统获得计算机软件著作权登记证书',content:' “云核WEB安全输入系统”是保护嵌入式操作系统上纯浏览器应用的重要手段，能对WEB应用进行安全增强，可大幅提升“木马”程序非法获取用户敏感输入信息“成本”。 '},
        {date:'2014-12-27',title:'云核网络中标鄞州银行ESB项目',content:'   随着鄞州银行业务的快速发展，鄞州银行对IT架构提出了新的要求，要求实现全行业务系统功能服务化，通过服务化的功能组件复用和灵活组合，达到快速响应市场业务变化的目的。'},
        {date:'2014-11-15',title:'云核网络中标鄞州银行移动信贷项目',content:' 国家发展改革委办公厅、中国人民银行办公厅共同下发了《关于组织开展移动电子商务金融科技服务创新试点工作的通知》（发改办高技〔2014〕1100号），其中要求宁波作为试点城市之一，宁波市人民政府和人民银行宁波中心支行共同推动移动金融安全可信公共服务平台（MTPS）建设，组织建设符合法律和标准的城市移动金融安全可信服务管理系统（TSM），并开展相应的移动金融创新试点工作。'},
        {image:'../assets/images/news/news_40.png',position_x:'-108px',position_y:'-70px',date:'2014-10-06',title:'云核网络顺利通过ISO 9000质量体系认证',content:' 在公司全体同事的通力合作下，经历文件编写、整理记录、现场整顿、内审、外审等阶段，公司近日顺利通过了ISO 9000质量体系认证。'},
        {date:'2014-09-02',title:'云核网络与攀枝花市商业银行签署电子银行项目监理及安全监理合同',content:'   日前，云核网络与攀枝花市商业银行签署了网上银行系统、手机银行系统、直销银行系统的项目监理及安全监理项目合同。'},
        {date:'2014-08-08',title:'云核网络与南充市商业银行签署电子银行基础开发平台及电子银行系统技术支持服务合同',content:'  南充市商业银行近年来蓬勃发展，已经成为一家资产过千亿、员工过千人、有国际金融背景、跨区域、有特色的现代精品银行。近日，我公司与南充市商业银行签署了电子银行基础开发平台及电子银行系统的技术支持服务合同,将对南充市商业银行电子银行的发展起到积极推动作用。'},
        {date:'2014-08-07',title:'云核网络与拉卡拉支付有限公司签署技术服务合同',content:'近日，云核网络与拉卡拉支付有限公司签署技术服务合同，为拉卡拉提供用户中心系统，邮件账单系统的软件开发服务。'},

        {date:'2014-08-07',title:'云核网络与昆仑天地签署技术咨询服务合同',content:' 近日，云核网络与昆仑天地签署技术咨询服务合同，云核网络将为昆仑天地提供大数据情况下的应用服务架构与安全体系建设的技术咨询服务。'},
        {date:'2014-07-17',title:'云核网络成功获得《商用密码产品销售许可证》资质',content:' 云核网络通过国家密码管理局审核，获得商用密码产品销售许可证。'},
        {image:'../assets/images/news/news_46.png',position_x:'-30px',position_y:'-100px',date:'2014-05-27',title:'云核网络北京公司首次Team Building活动',content:'5月25日，云核网络北京公司在美丽的云蒙山开展了首次Team Building活动。'},
        {date:'2014-05-19',title:'CloudCore国密浏览器获得计算机软件著作权登记证书',content:'云核网络CloudCore国密浏览器获得国家版权局《计算机软件著作权登记证书》。'},
        {date:'2014-05-17',title:'cToken动态令牌软件获得计算机软件著作权登记证书',content:'云核网络cToken动态令牌软件 v2014 （Android、iOS版本）获得国家版权局《计算机软件著作权登记证书》。'},
        {date:'2012-12-17',title:'银盾思创通过北京软件行业协会软件企业认定',content:' 2012年12月17日，北京银盾思创网络技术有限公司通过北京软件行业协会软件企业认定，并获得软件企业认定证书。'},
        {date:'2012-12-17',title:'银盾思创SA-iSecurity客户端安全输入系统获得软件产品登记证书',content:'2012年12月17日，北京银盾思创网络技术有限公司SA-iSecurity客户端安全输入系统通过北京软件行业协会国产软件产品登记，并获得软件产品登记证书。'},
        {date:'2012-12-03',title:'银盾思创为福建海峡银行提供Windows安全输入解决方案',content:'2012年12月3日，北京银盾思创网络技术有限公司与福建海峡银行签订合同，为福建海峡银行的网上银行系统提供Windows平台安全输入解决方案。'},
        {date:'2012-11-22',title:'银盾思创获得国家密码管理局颁发的商用密码产品生产定点单位证书',content:' 2012年11月22日，国家密码管理局指定北京银盾思创网络技术有限公司为商用密码产品生产定点单位，并颁发证书。'},
        {date:'2012-11-13',title:'银盾思创为徽商银行提供Windows安全输入解决方案',content:'2012年11月13日，北京银盾思创网络技术有限公司与徽商银行签订合同，为徽商银行的网上银行系统提供Windows平台安全输入解决方案'},
        {date:'2012-11-01',title:'银盾思创为江苏吴江农村商业银行提供“网银管家”开发服务',content:'2012年11月1日，北京银盾思创网络技术有限公司与江苏吴江农村商业银行股份有限公司签订合同，为江苏吴江农村商业银行的网上银行系统提供“网银管家”开发服务。'},
        {date:'2012-10-30',title:'银盾思创为江苏吴江农村商业银行股份有限公司提供Windows安全输入解决方案',content:'2012年10月30日，北京银盾思创网络技术有限公司与江苏吴江农村商业银行股份有限公司签订合同，为江苏吴江农村商业银行的网上银行系统提供Windows平台安全输入解决方案。'},
        {date:'2012-10-16',title:'银盾思创携手上海CA为上海付费通信息服务有限公司提供Windows安全输入解决方案',content:'2012年10月16日，北京银盾思创网络技术有限公司携手上海数字证书认证中心有限公司，为上海付费通信息服务有限公司承建的政府便民实事项目“付费通”提供Windows平台安全输入解决方案。'},
        {date:'2012-08-30',title:'银盾思创为江阴农商银行提供Windows安全输入解决方案',content:'2012年10月16日，2012年8月30日，北京银盾思创网络技术有限公司与江阴农商银行签订合同，为江阴农商银行的网上银行系统提供Windows平台安全输入解决方案。'},

        {date:'2012-08-17',title:'银盾思创为江苏省农村信用社联合社提供Windows安全输入解决方案',content:'2012年8月17日，北京银盾思创网络技术有限公司与江苏省农村信用社联合社签订合同，为江苏省农村信用社联合社的网上银行系统提供Windows平台安全输入解决方案。'},
        {date:'2012-08-01',title:'银盾思创为大连银行提供手机银行安全输入解决方案',content:' 2012年8月1日，北京银盾思创网络技术有限公司助力大连银行，为其即将推出的iPhone手机银行和Android手机银行提供安全输入解决方案。'},
        {date:'2012-07-19',title:'银盾思创第三代USBKey产品通过中金金融认证中心测试',content:'2012年7月19日，北京银盾思创网络技术有限公司第三代USBKey产品（SA-UKey-3G）通过中金金融认证中心（简称：CFCA）的相关测试，并顺利获得由CFCA颁发的证书。'},
        {date:'2012-07-13',title:'银盾思创为晋商银行提供Windows及Mac平台安全输入解决方案',content:'2012年7月13日，北京银盾思创网络技术有限公司与晋商银行股份有限公司签订合同，为晋商银行股份有限公司的网上银行系统提供Windows及Mac平台安全输入解决方案。'},
        {date:'2012-07-10',title:'云核JAVA应用开算机软件著作权登记证书',content:'为了促进国密技术的行业运用，推动金融业安全软硬件系统及产品的产业化发展，北京银盾思创网络技术有限公司与中国金融认证中心有限公司本着友好合作、共同发展的宗旨，共同签署战略合作协议。'},
        {date:'2012-06-12',title:'银盾思创为嘉兴银行提供Windows平台安全输入解决方案',content:'2012年6月12日，北京银盾思创网络技术有限公司与嘉兴银行股份有限公司签订合同，为嘉兴银行股份有限公司的网上银行系统提供Windows平台安全输入解决方案。'},
        {date:'2012-05-18',title:'银盾思创与中国民生银行信用卡中心签署接入安全节点系统开发合同',content:'2012年5月18日，北京银盾思创网络技术有限公司与中国民生银行信用卡中心签署接入安全节点系统开发合同，该合同的签订进一步强化了双方的合作伙伴关系。'},
        {date:'2012-05-15',title:'银盾思创为安邦保险帮付宝项目提供客户端安全输入解决方案',content:'2012年5月15日，北京银盾思创网络技术有限公司与安邦保险集团股份有限公司签订合同，为其帮付宝项目提供客户端安全输入解决方案。'},
        {date:'2012-05-15',title:'鄞州银行与我公司签署三代KEY采购协议',content:'2012年5月15日，为更好的服务客户，鄞州银行与北京银盾思创网络技术有限公司签署了三代USBKEY采购协议，初期该产品主要面向行方高端客户发放。'},
        {date:'2012-04-08',title:'银盾思创与多思公司成立联合安全实验中心',content:'为了促进国密技术在金融行业的运用，推动国产自主知识产权安全芯片的产业化发展，2012年4月8日，北京多思科技工业园股份有限公司与北京银盾思创网络技术有限公司本着优势互补，强强联合的原则，成立多思银盾联合安全实验中心。'},
        {date:'2012-04-06',title:'银盾思创携手先进数通为长春农商行提供Windows安全输入解决方案',content:'2012年4月6日，北京银盾思创网络技术有限公司携手北京先进数通信息技术有限公司，为长春农村商业银行股份有限公司即将推出的网上银行系统提供Windows安全输入解决方案。'},
        {date:'2012-03-08',title:'银盾思创为民生银行信用卡中心提供手机银行安全输入解决方案',content:'2012年3月8日，北京银盾思创网络技术有限公司助力中国民生银行信用卡中心，为其即将推出的iPhone手机银行和Android手机银行提供安全输入解决方案。'},
        {image:'../assets/images/news/news_70.jpg',position_x:'-32px',position_y:'-90px',date:'2011-11-10',title:'我公司总经理戴林巧在中国银行业信息科技风险管理2011年会上作主题演讲',content:'2011年11月8日，我公司总经理戴林巧先生在中国银行业信息科技风险管理2011年会上作“网上银行暨电子银行安全风险防控”主题演讲 。'},

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
