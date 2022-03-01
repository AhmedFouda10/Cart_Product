$(document).ready(function() {
    // when click on button first_chicld
    $(".first_child").click(function() {
        // storage values box1 in variables
        var input = Number($(".input1").val());
        var name = $(".title1").html();
        var price = Number($(".price1").html());
        var count = Number($(".count").html());
        var total_product = Number($(".total_product").html());
        // using if condition to add product with append
        if (input == 0) {
            // count input
            input = input + 1;
            Number($(".input1").val(input));
            // count cart
            count = count + 1;
            Number($(".count").html(count));
            // append product1 in table in cart_page
            $("table").append("<tr class='pro1'><td>" + name + "</td><td><img src='img/pro1.png'></td><td class='p1'>" + price + "</td><td class='c1'>1</td><td><button class='btn btn-danger remove1'>Delete Product</button></td></tr>");
            // set full price in total_product
            total = total_product + price;
            Number($(".total_product").html(total));
            // when click on button remove1
            $(".remove1").click(function() {
                // storage values box1 in variables
                var input = Number($(".input1").val());
                var price = Number($(".price1").html());
                var count = Number($(".count").html());
                var total_product = Number($(".total_product").html());
                var c1 = Number($(".c1").html());
                // using if condition to remove product
                if (c1 == 1) {
                    // count cart
                    count = count - 1;
                    Number($(".count").html(count));
                    // count input
                    input = input - 1;
                    Number($(".input1").val(input));
                    // set full price in total_product
                    total_product = total_product - price;
                    Number($(".total_product").html(total_product));
                    // remove product
                    $(".pro1").remove();
                } else {
                    // count cart
                    count = count - 1;
                    Number($(".count").html(count));
                    // count product_1
                    Number($(".c1").html(c1 - 1));
                    // set full price in total_product
                    total_product = total_product - price;
                    Number($(".total_product").html(total_product));
                    // set full price in price product_1
                    $(".p1").html(total_product);

                }
            })
        } else {
            // count cart
            count = count + 1;
            Number($(".count").html(count));
            // count product_1
            var c1 = Number($(".c1").html());
            Number($(".c1").html(c1 + 1));
            // set full price in total_product
            total_product = total_product + price;
            Number($(".total_product").html(total_product));
            // set full price in price product_1
            var p1 = Number($(".p1").html());
            $(".p1").html(p1 + price);

        }

    });
    // when click on button second_child
    $(".second_child").click(function() {
        // storage values box2 in variables
        var input = Number($(".input2").val());
        var name = $(".title2").html();
        var price = Number($(".price2").html());
        var count = Number($(".count").html());
        var total_product = Number($(".total_product").html());
        // using if condition to add product with append
        if (input == 0) {
            // count input
            input = input + 1;
            Number($(".input2").val(input));
            // count cart
            count = count + 1;
            Number($(".count").html(count));
            // append product1 in table in cart_page
            $("table").append("<tr class='pro2'><td>" + name + "</td><td><img src='img/pro2.png'></td><td class='p2'>" + price + "</td><td class='c2'>1</td><td><button class='btn btn-danger remove2'>Delete Product</button></td></tr>");
            // set full price in total_product
            total = total_product + price;
            Number($(".total_product").html(total));
            // when click on button remove2
            $(".remove2").click(function() {
                // storage values box2 in variables
                var input = Number($(".input2").val());
                var price = Number($(".price2").html());
                var count = Number($(".count").html());
                var total_product = Number($(".total_product").html());
                var c2 = Number($(".c2").html());
                // using if condition to remove product
                if (c2 == 1) {
                    // count cart
                    count = count - 1;
                    Number($(".count").html(count));
                    // count input
                    input = input - 1;
                    Number($(".input2").val(input));
                    // set full price in total_product
                    total_product = total_product - price;
                    Number($(".total_product").html(total_product));
                    // remove product
                    $(".pro2").remove();
                } else {
                    // count cart
                    count = count - 1;
                    Number($(".count").html(count));
                    // count product_2
                    Number($(".c2").html(c2 - 1));
                    // set full price in total_product
                    total_product = total_product - price;
                    Number($(".total_product").html(total_product));
                    // set full price in price product_2
                    $(".p2").html(total_product);
                }
            })
        } else {
            // count cart
            count = count + 1;
            Number($(".count").html(count));
            // count product_2
            var c2 = Number($(".c2").html());
            Number($(".c2").html(c2 + 1));
            // set full price in total_product
            total_product = total_product + price;
            Number($(".total_product").html(total_product));
            // set full price in price product_2
            var p2 = Number($(".p2").html());
            $(".p2").html(p2 + price);
        }
    });
    // when click on button third_child
    $(".third_child").click(function() {
        // storage values box3 in variables
        var input = Number($(".input3").val());
        var name = $(".title3").html();
        var price = Number($(".price3").html());
        var count = Number($(".count").html());
        var total_product = Number($(".total_product").html());
        // using if condition to add product with append
        if (input == 0) {
            // count input
            input = input + 1;
            Number($(".input3").val(input));
            // count cart
            count = count + 1;
            Number($(".count").html(count));
            // append product1 in table in cart_page
            $("table").append("<tr class='pro3'><td>" + name + "</td><td><img src='img/pro3.png'></td><td class='p3'>" + price + "</td><td class='c3'>1</td><td><button class='btn btn-danger remove3'>Delete Product</button></td></tr>");
            // set full price in total_product
            total = total_product + price;
            Number($(".total_product").html(total));
            // when click on button remove3
            $(".remove3").click(function() {
                // storage values box3 in variables
                var input = Number($(".input3").val());
                var price = Number($(".price3").html());
                var count = Number($(".count").html());
                var total_product = Number($(".total_product").html());
                var c3 = Number($(".c3").html());
                // using if condition to remove product
                if (c3 == 1) {
                    // count cart
                    count = count - 1;
                    Number($(".count").html(count));
                    // count input
                    input = input - 1;
                    Number($(".input3").val(input));
                    // set full price in total_product
                    total_product = total_product - price;
                    Number($(".total_product").html(total_product));
                    // remove product
                    $(".pro3").remove();
                } else {
                    // count cart
                    count = count - 1;
                    Number($(".count").html(count));
                    // count product_3
                    Number($(".c3").html(c3 - 1));
                    // set full price in total_product
                    total_product = total_product - price;
                    Number($(".total_product").html(total_product));
                    // set full price in price product_3
                    $(".p3").html(total_product);
                }
            })
        } else {
            // count cart
            count = count + 1;
            Number($(".count").html(count));
            // count product_3
            var c3 = Number($(".c3").html());
            Number($(".c3").html(c3 + 1));
            // set full price in total_product
            total_product = total_product + price;
            Number($(".total_product").html(total_product));
            // set full price in price product_3
            var p3 = Number($(".p3").html());
            $(".p3").html(p3 + price);
        }
    });

    // when click on cart sala
    $(".cart").click(function() {
        // show and hide cart_page
        $(".cart_page").toggle(1000);
    });
    // when click on button clear
    $(".clear").click(function() {
        // all tr remove without class(.main,.row4)
        $("table tr").not(".main,.row4").remove();
        // to set value 0 in total_product
        $(".total_product").html(0);
        // to set value 0 in count cart
        $(".count").html(0);
        // to set value 0 in input tag
        Number($(".input1,.input2,.input3").val(0));
    })

})