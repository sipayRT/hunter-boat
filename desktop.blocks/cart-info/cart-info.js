/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('cart-info', {

    onSetMod : {

        'js' : function() {
            var _this = this;
            this.totalPriceValue = _this.findBlockInside(_this.elem('total-price'), 'price').elem('value');

            // event by order-list $(window).trigger('cart:update', { totalPrice: totalPrice, totalProducts: totalProducts });

            $(window).bind('cart:update', function(event, data) {
            
                 // show or hide block
                 _this.domElem.css('opacity', data.totalProducts == 0 ? 0 : 1);
            
                _this.elem('total-products').html(data.totalProducts);
                _this.totalPriceValue.html(data.totalPrice);
            });
        }

    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();
