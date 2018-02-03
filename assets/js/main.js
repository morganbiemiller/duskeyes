(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'duskeyes.myshopify.com',
      apiKey: '26c1dfa7647379a7cc4fc5d27b6ed373',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 348756555,
        node: document.getElementById('collection-component-445cf7fa757'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          product: {
            buttonDestination: 'modal',
            variantId: 'all',
            contents: {
              imgWithCarousel: false,
              variantTitle: false,
              options: false,
              description: false,
              buttonWithQuantity: false,
              quantity: false,
              button: true,
            },
            templates: {
              button: '<div class="buy-button-wrapper"><button class="{{data.classes.product.button}}"></button><div>'
            },
            classes: {
              product: 'product',
              button: 'buy-button-listing buy-button--animated',
            },
            styles: {
              product: {
                'text-align': 'left',
              },
            }
          },
          productSet: {
            iframe: false,
          },
          cart: {
            iframe: false,
            contents: {
              checkoutButton: true,
              header: true,
              title: true,
              footer: true,
              button: false,
              total: true,
              subtotal: true,
            },
            templates: {
              checkoutButton:'<button class="{{data.classes.cart.button}}">Checkout</button>'
            },
            classes: {
              checkoutButton: 'button--checkout',
            },
            order: [
              'header',
              'title',
              'lineItems',
              'footer',
              'total',
              'subtotal',
              'checkoutButton',
            ],
          },
          modalProduct: {
            contents: {
              details: true,
              buyButton: true,
              img: false,
              imgWithCarousel: true,
              variantTitle: false,
              buttonWithQuantity: false,
              button: false,
              quantity: false,
              title: false,
              description: true,
              price: false
            },
            templates: {
              details: '<div class="{{data.classes.product.details}}">' +
                          '<div class="{{data.classes.product.title}}">{{data.title}}</div>' +
                          '<span class="{{data.classes.product.prices}}">' +
                            '<span class="{{data.classes.product.price}}">{{data.formattedPrice}}</span>' +
                          '</span>' +
                        '</div>',
              buyButton:'<button class="{{data.classes.product.button}}">Add To Bag</button>'
            },
            classes: {
              details: 'modal__product-details',
              buyButton: 'button button--buy'
            },
            order: [
              'imgWithCarousel',
              'details',
              'description',
              'buyButton'
            ],
          },
          modal: {
            iframe: false
          }
        }
      });
    });
  }
})();