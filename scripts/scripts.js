function slider(element) {
    if (document.getElementById(element).id == "s1") {
        document.getElementById('s1').className = "circle1";
        document.getElementById('s2').className = "circle";
        document.getElementById('s3').className = "circle";
        document.getElementById('s4').className = "circle";
        document.getElementById('portfolio').innerHTML = "<img width=\"521\" height=\"391\" src=\"images/image2.svg\" alt=\"\" class=\"image_portfolio\">" +
            "<div class=\"portfolio_right\">" +
            "  <p class=\"Text_portfolio1\">Сайт строительной фирмы \"Велстрой\"</p>" +
            "  <div id=\"w4\">" +
            "    <div id=\"w1\">" +
            "      <img width=\"50.86\" height=\"52\" src=\"images/Sroki.svg\" alt=\"\">" +
            "      <div class=\"w5\">" +
            "        <span class=\"Text_portfolio2\">Сроки</span>" +
            "        <span class=\"Text_portfolio3\">4 рабочих дня</span>" +
            "      </div>" +
            "    </div>" +
            "    <div id=\"w2\">" +
            "      <img width=\"52\" height=\"52.03\" src=\"images/Money.svg\" alt=\"\">" +
            "      <div class=\"w5\">" +
            "        <span class=\"Text_portfolio4\">Стоимость</span>" +
            "        <span class=\"Text_portfolio5\">14 000 рублей</span>" +
            "      </div>" +
            "    </div>" +
            "  </div>" +
            "  <div id=\"w3\">" +
            "    <img width=\"50.24\" height=\"51.64\" id=\"w6\" src=\"images/Otziv.svg\" alt=\"\">" +
            "    <div class=\"w5\">" +
            "      <span class=\"Text_portfolio6\">Отзыв клиента</span>" +
            "      <span class=\"Text_portfolio7\">Мне понравилось работать с Андреем, потому что он всё время был" +
            "        на связи и предлагал свои решения, когда мы заходили в тупик с" +
            "        дизайном. Мне нужны был и закрывающие документы для бухгалтерии" +
            "        и Иван тот редкий фрилансер, у которого с документами всё в" +
            "        порядке.</span>" +
            "    </div>" +
            "  </div>" +
            "</div>";
    }
    if (document.getElementById(element).id == "s2") {
        document.getElementById('s1').className = "circle";
        document.getElementById('s2').className = "circle1";
        document.getElementById('s3').className = "circle";
        document.getElementById('s4').className = "circle";
        document.getElementById('portfolio').innerHTML = "<img width=\"521\" height=\"391\" src=\"images/image3.svg\" alt=\"\" class=\"image_portfolio\">" +
            "<div class=\"portfolio_right\">" +
            "  <p class=\"Text_portfolio1\">Интернет магазин электросамокатов</p>" +
            "  <div id=\"w4\">" +
            "    <div id=\"w1\">" +
            "      <img width=\"50.86\" height=\"52\" src=\"images/Sroki.svg\" alt=\"\">" +
            "      <div class=\"w5\">" +
            "        <span class=\"Text_portfolio2\">Сроки</span>" +
            "        <span class=\"Text_portfolio3\">6 рабочих дней</span>" +
            "      </div>" +
            "    </div>" +
            "    <div id=\"w2\">" +
            "      <img width=\"52\" height=\"52.03\" src=\"images/Money.svg\" alt=\"\">" +
            "      <div class=\"w5\">" +
            "        <span class=\"Text_portfolio4\">Стоимость</span>" +
            "        <span class=\"Text_portfolio5\">16 000 рублей</span>" +
            "      </div>" +
            "    </div>" +
            "  </div>" +
            "  <div id=\"w3\">" +
            "    <img width=\"50.24\" height=\"51.64\" id=\"w6\" src=\"images/Otziv.svg\" alt=\"\">" +
            "    <div class=\"w5\">" +
            "      <span class=\"Text_portfolio6\">Отзыв клиента</span>" +
            "      <span class=\"Text_portfolio7\">Андрей хорошо и качествено выполнил работу." +
            "        Показывал мне каждый этап выполнения работы" +
            "        Очень рад проделанной работе</span>" +
            "    </div>" +
            "  </div>" +
            "</div>";
    }
    if (document.getElementById(element).id == "s3") {
        document.getElementById('s1').className = "circle";
        document.getElementById('s2').className = "circle";
        document.getElementById('s3').className = "circle1";
        document.getElementById('s4').className = "circle";
        document.getElementById('portfolio').innerHTML = "<img width=\"521\" height=\"391\" src=\"images/image4.svg\" alt=\"\" class=\"image_portfolio\">" +
            "<div class=\"portfolio_right\">" +
            "  <p class=\"Text_portfolio1\">Сайт мобильного приложения \"Fithness Online\"</p>" +
            "  <div id=\"w4\">" +
            "    <div id=\"w1\">" +
            "      <img width=\"50.86\" height=\"52\" src=\"images/Sroki.svg\" alt=\"\">" +
            "      <div class=\"w5\">" +
            "        <span class=\"Text_portfolio2\">Сроки</span>" +
            "        <span class=\"Text_portfolio3\">3 рабочих дня</span>" +
            "      </div>" +
            "    </div>" +
            "    <div id=\"w2\">" +
            "      <img width=\"52\" height=\"52.03\" src=\"images/Money.svg\" alt=\"\">" +
            "      <div class=\"w5\">" +
            "        <span class=\"Text_portfolio4\">Стоимость</span>" +
            "        <span class=\"Text_portfolio5\">10 000 рублей</span>" +
            "      </div>" +
            "    </div>" +
            "  </div>" +
            "  <div id=\"w3\">" +
            "    <img width=\"50.24\" height=\"51.64\" id=\"w6\" src=\"images/Otziv.svg\" alt=\"\">" +
            "    <div class=\"w5\">" +
            "      <span class=\"Text_portfolio6\">Отзыв клиента</span>" +
            "      <span class=\"Text_portfolio7\">Андрей очень быстро выполнил заказ и исправил недоработки в дизайне.</span>" +
            "    </div>" +
            "  </div>" +
            "</div>";
    }
    if (document.getElementById(element).id == "s4") {
        document.getElementById('s1').className = "circle";
        document.getElementById('s2').className = "circle";
        document.getElementById('s3').className = "circle";
        document.getElementById('s4').className = "circle1";
        document.getElementById('portfolio').innerHTML = "<img width=\"521\" height=\"391\" src=\"images/image5.svg\" alt=\"\" class=\"image_portfolio\">" +
            "<div class=\"portfolio_right\">" +
            "  <p class=\"Text_portfolio1\">Сайт поддержки бездомных животных</p>" +
            "  <div id=\"w4\">" +
            "    <div id=\"w1\">" +
            "      <img width=\"50.86\" height=\"52\" src=\"images/Sroki.svg\" alt=\"\">" +
            "      <div class=\"w5\">" +
            "        <span class=\"Text_portfolio2\">Сроки</span>" +
            "        <span class=\"Text_portfolio3\">4 рабочих дня</span>" +
            "      </div>" +
            "    </div>" +
            "    <div id=\"w2\">" +
            "      <img width=\"52\" height=\"52.03\" src=\"images/Money.svg\" alt=\"\">" +
            "      <div class=\"w5\">" +
            "        <span class=\"Text_portfolio4\">Стоимость</span>" +
            "        <span class=\"Text_portfolio5\">13 000 рублей</span>" +
            "      </div>" +
            "    </div>" +
            "  </div>" +
            "  <div id=\"w3\">" +
            "    <img width=\"50.24\" height=\"51.64\" id=\"w6\" src=\"images/Otziv.svg\" alt=\"\">" +
            "    <div class=\"w5\">" +
            "      <span class=\"Text_portfolio6\">Отзыв клиента</span>" +
            "      <span class=\"Text_portfolio7\">Вёрстка выполнена отлично и учтены все правки," +
            "        которые появлялись во время выполнения проекта</span>" +
            "    </div>" +
            "  </div>" +
            "</div>";
    }
}