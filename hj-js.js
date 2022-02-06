    // helpers
    function hj_addProducts (img_src, title, text, link_url, link_title) {
        var product_container = document.createElement('div');
        product_container.className = "hijacked-product";
        var product_img_container = document.createElement('div');
        product_img_container.className = "hijacked-production-img";
        var product_img = document.createElement('img');
        product_img.src = img_src;
        var product_detail = document.createElement('div');
        product_detail.className = "hijacked-product-detail";
        var product_title = document.createElement('h2');
        product_title.className = "hijacked-product-title";
        product_title.innerHTML = title;
        var product_description = document.createElement('p');
        product_description.className = "hijacked-product-p";
        product_description.innerHTML = text;
        var a_product = document.createElement('a');
        a_product.className = "hijacked-product-a";
        a_product.target="_blank";
        a_product.href=link_url;
        a_product.innerHTML=link_title;

        product_container.appendChild(product_img_container);
        product_img_container.appendChild(product_img);
        product_container.appendChild(product_detail);
        product_detail.appendChild(product_title);
        product_detail.appendChild(product_description);
        product_detail.appendChild(a_product);

        return product_container;
    }

    // config
    var main_app_id = 'dcom_hero_global';

    // elements
    var main_app = document.getElementById(main_app_id);
    var main_app_container = document.createElement('section');
    var link_1 = document.createElement('link');
    var link_2 = document.createElement('link');
    var link_3 = document.createElement('link');
    var hj_container = document.createElement('div');
    var hj_container_content = document.createElement('div');
    var hj_h1 = document.createElement('h1');
    var hj_h3 = document.createElement('h3');
    var a_1 = document.createElement('a');
    var hj_products_container = document.createElement('div');


    // element attributes
    main_app_container.id="hijacked-experience";
    link_1.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap";
    link_1.rel = "stylesheet";
    link_2.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    link_2.rel = "stylesheet";
    link_3.href = "https://cdn.jsdelivr.net/gh/jrdesignhero/citizensbank@main/hj.css";
    link_3.rel = "stylesheet";
    hj_container.className = "hijacked-container";
    hj_container_content.className = "hijacked-container-content";
    hj_h1.className = "hijacked-h1";
    hj_h1.innerHTML = "Check out faster, easier, and more securely.";
    hj_h3.className = "hijacked-h3";
    hj_h3.innerHTML = "With a Citizens card in your digital wallet, one ding and you're done.";
    a_1.href="https://www.citizensbank.com/everyday-banking/overview.aspx?";
    a_1.target="_blank";
    a_1.className="hj-learn-more-btn";
    a_1.innerHTML="Become a Member";
    hj_products_container.className = "hijacked-products-container";

    // mount app
    main_app_container.appendChild(link_1);
    main_app_container.appendChild(link_2);
    main_app_container.appendChild(link_3);
    main_app_container.appendChild(hj_container);
    hj_container.appendChild(hj_container_content);
    hj_container_content.appendChild(hj_h1);
    hj_container_content.appendChild(hj_h3);
    hj_container_content.appendChild(a_1);
    hj_container.appendChild(hj_products_container);
    hj_products_container.appendChild(
        hj_addProducts (
            "https://www.citizensbank.com/assets/CB_media/images/online_mobile_banking/applepay_mobile_320x219.png", 
            "Citizens &amp; Apple Pay", 
            "Use your Citizens debit or credit card with your iPhone®, iPad®, or Apple Watch®.", 
            "https://www.citizensbank.com/digital-wallets/apple-pay.aspx", 
            "Apple Pay <i class=\"fa-solid fa-angle-right\"></i>"
        )
    );
    hj_products_container.appendChild(
        hj_addProducts (
            "https://www.citizensbank.com/assets/CB_media/images/online_mobile_banking/samsungpay_mobile_320x219.png", 
            "Citizens &amp; Samsung Pay", 
            "Use your Citizens debit or credit card with your Samsung smartphone or other device.", 
            "https://www.citizensbank.com/digital-wallets/samsung-pay.aspx", 
            "Samsung Pay <i class=\"fa-solid fa-angle-right\"></i>"
        )
    );
    hj_products_container.appendChild(
        hj_addProducts (
            "https://www.citizensbank.com/assets/CB_media/images/online_mobile_banking/mobile_FitBitPay_320x219.png", 
            "Citizens &amp; Google Pay", 
            "Use your Citizens debit or credit card with your smartphone and Google Pay.", 
            "https://www.citizensbank.com/digital-wallets/google-pay.aspx", 
            "Google Pay <i class=\"fa-solid fa-angle-right\"></i>"
        )
    );
    hj_products_container.appendChild(
        hj_addProducts (
            "https://www.citizensbank.com/assets/CB_media/images/online_mobile_banking/googlepay_mobile_320x219.png", 
            "Citizens &amp; PayPal", 
            "You can now quickly and easily add your Citizens Debit Card to PayPal to use for PayPal transactions.", 
            "https://www.citizensbankonline.com/efs/servlet/efs/default-enroll.jsp?BrandSettingsFile=citSettings.jsp", 
            "Enroll Now <i class=\"fa-solid fa-angle-right\"></i>"
        )
    );
    main_app.innerHTML = "";
    main_app.appendChild(main_app_container);
