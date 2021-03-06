<?php

include "components/container/container.php";
include "components/html/html.php";
include "components/liquid/liquid.php";
include "components/wysiwyg/wysiwyg.php";

include "components/logo/logo.php";
include "components/menu/menu.php";
include "components/hr/hr.php";

include "components/image/image.php";
include "components/slider/slider.php";
include "components/list/list.php";

include "components/form/form.php";
include "components/form_text/form_text.php";
include "components/form_select/form_select.php";
include "components/form_button/form_button.php";
include "components/testimonial/testimonial.php";

include "components/smart_image/smart_image.php";
include "components/smart_text/smart_text.php";

include "components/countdown/countdown.php";

TemplaterApi::addAction('getComponents',function($api,&$components) {
    // include "components/website.php";
    // include "components/content.php";
});