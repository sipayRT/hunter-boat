({
    block  : 'b-page',
    title  : 'order',
    head   : [
        { elem: 'css', url: '_order.css', ie: false},
        { elem: 'css', url: '_order', ie: true },
        /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.7.2.js'},
        { elem: 'js', url: '_order.js'},
    ],
    content: [
        {
            block  : 'header',
            content: [
                {
                    block  : 'wrapper-fix-width',
                    mods   : { width: '960' },
                    content: [
                        {
                            block   : 'header',
                            elem    : 'column',
                            elemMods: { position: 'left' },
                            content : [
                                {
                                    block  : 'logo',
                                    content: 'HUNTERBOAT'
                                }
                            ]
                        },

                        {
                            block   : 'header',
                            elem    : 'column',
                            elemMods: { position: 'right' },
                            content : [
                                {
                                    block  : 'cart-info',
                                    content: [
                                        {
                                            elem   : 'link',
                                            content: {
                                                block  : 'b-link',
                                                url    : 'cart',
                                                content: 'В заказе:'
                                            }
                                        },
                                        {
                                            elem   : 'info',
                                            content: [
                                                {
                                                    elem   : 'text',
                                                    content: '3 товара на сумму'
                                                },
                                                {
                                                    elem   : 'total-price',
                                                    content: { block: 'price', mods: { currency: 'dot-dash' }, value: '95000' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block  : 'contacts',
                                    mods   : { color: '000000' },
                                    content: [
                                        {
                                            elem   : 'phone',
                                            content: [
                                                {
                                                    elem   : 'phone-city-code',
                                                    content: '812'
                                                },
                                                {
                                                    elem   : 'phone-number',
                                                    content: '320-02-60'
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'link',
                                            content: {
                                                block  : 'b-link',
                                                mods   : { pseudo: 'yes' },
                                                content: 'Обратный звонок'
                                            }
                                        }
                                    ]
                                },
                                {
                                    block  : 'main-menu',
                                    content: [
                                        {
                                            elem    : 'section',
                                            elemMods: { background: 'red' },
                                            content : {
                                                elem   : 'list',
                                                content: [
                                                    {
                                                        elem    : 'item',
                                                        elemMods: { section: 'catalog' },
                                                        name    : 'Каталог',
                                                        url     : '/catalog/'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            elem   : 'section',
                                            content: {
                                                elem   : 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        name: 'О компании',
                                                        url : '/about/'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Отзывы',
                                                        url : '/feedback/'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Вопрос-ответ',
                                                        url : '/faq/'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Фотографии',
                                                        url : '/photos/'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Оптовикам',
                                                        url : '/wholesale/'
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    block  : 'buyer-menu',
                                    content: [
                                        {
                                            elem: 'item',
                                            name: 'Как купить',
                                            url : '/howtobuy/'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Где купить',
                                            url : '/wheretobuy/'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Доставка',
                                            url : '/shipping/'
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
            ]
        },
        {
            block  : 'content',
            content: [
                {
                    block  : 'wrapper-fix-width',
                    mods   : { width: '960' },
                    content: [
                        {
                            block   : 'content',
                            elem    : 'column',
                            elemMods: { position: 'full' },
                            content : [
                                {
                                    block  : 'order-page',
                                    content: [
                                        {
                                            elem   : 'menu',
                                            content: [
                                                {
                                                    elem    : 'menu-item',
                                                    elemMods: { state: 'current' },
                                                    content : 'Уточнение заказа'
                                                },
                                                {
                                                    elem: 'menu-item',

                                                    content: 'Авторизация'
                                                },
                                                {
                                                    elem   : 'menu-item',
                                                    content: 'Параметры заказа'
                                                },
                                                {
                                                    elem   : 'menu-item',
                                                    content: 'Подтверждение заказа'
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'content',
                                            content: [
                                                {
                                                    elem    : 'tab',
                                                    elemMods: { state: 'current' },
                                                    content : [
                                                        {
                                                            block  : 'order-list',
                                                            content: [
                                                                {
                                                                    elem   : 'header',
                                                                    content: [
                                                                        {
                                                                            elem   : 'header-item',
                                                                            content: 'Товар'
                                                                        },
                                                                        {
                                                                            elem: 'header-item'
                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            content: 'Кол-во'
                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            content: 'Цена, руб.'
                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            content: 'Удалить'
                                                                        }

                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'list',
                                                                    content: [
                                                                        {
                                                                            elem   : 'item',
                                                                            content: [
                                                                                {
                                                                                    elem: 'item-photo',
                                                                                    src : ''
                                                                                },
                                                                                {
                                                                                    elem   : 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'item-name',
                                                                                            content: 'Надувная лодка Хантер 290 Р'
                                                                                        },
                                                                                        {
                                                                                            elem   : 'item-qualif',
                                                                                            content: 'цвет'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'item-name',
                                                                                    content: 'Надувная лодка Хантер 290 Р'
                                                                                },
                                                                                {
                                                                                    elem : 'counter',
                                                                                    count: 4
                                                                                },
                                                                                {
                                                                                    elem   : 'price',
                                                                                    content: { block: 'b-price', value: 38790, mods: { currency: 'empty' } }
                                                                                },
                                                                                {
                                                                                    elem   : 'delete',
                                                                                    content: { block: 'button', mods: { type: 'order-item-delete' } }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'total',
                                                                    content: [
                                                                        {
                                                                            elem   : 'total-text',
                                                                            content: 'Стоимость заказа:'
                                                                        },
                                                                        {
                                                                            elem   : 'total-value',
                                                                            content: { block: 'b-price', value: 999999, mods: { currency: 'empty' } }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'info',
                                                                    content: 'Обращаем Ваше внимание, что окончательная стоимость заказа, если в нем присутствуют товары и/или услуги, участвующие в акции, будет подтверждена после обработки заказа сотрудником Компании.'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'next',
                                                            content: { block: 'button', mods: { type: 'submit' }, content: 'Далее' }
                                                        }
                                                    ],
                                                },
                                                {
                                                    elem   : 'tab',
                                                    content: [
                                                        {
                                                            block  : 'authorization',
                                                            content: [
                                                                {
                                                                    elem   : 'signup',
                                                                    content: {
                                                                        block: 'signup',
                                                                        content: ''
                                                                    }
                                                                },
                                                                {
                                                                    elem   : 'signin',
                                                                    content: {
                                                                        block: 'signin'
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'next',
                                                            content: { block: 'button', mods: { type: 'submit', state: 'disable' }, content: 'Далее' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem   : 'tab',
                                                    content: [
                                                        {
                                                            block  : 'radio-switcher',
                                                            content: [
                                                                {
                                                                    elem   : 'header',
                                                                    content: 'Способ оплаты'
                                                                },
                                                                {
                                                                    elem   : 'list',
                                                                    content: [
                                                                        {
                                                                            elem   : 'item',
                                                                            mix    : [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', mods: { type: 'radio' }, name: 'pay-method', value: 'cash', checked: true, label: 'Наличными' }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            mix    : [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', mods: { type: 'radio' }, name: 'pay-method', value: 'cash', label: 'Наличными' }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            mix    : [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', mods: { type: 'radio' }, name: 'pay-method', value: 'cash', label: 'Наличными' }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'tabs',
                                                                    content: [
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: {
                                                                                block  : 'b-text',
                                                                                content: [
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Наличными'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Наличными'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Наличными'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: {
                                                                                block  : 'b-text',
                                                                                content: [
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Банковаская карта'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Банковаская карта'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Банковаская карта'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: [
                                                                                {
                                                                                    block  : 'fieldset',
                                                                                    name   : 'Введите информацию для выставления счета',
                                                                                    content: [
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'Наименование организации'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    block  : 'fieldset',
                                                                                    name   : 'Юридический адрес:',
                                                                                    content: [
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'Индекс'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'Город'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'Адрес'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'ИНН'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'КПП'
                                                                                        }

                                                                                    ]
                                                                                },
                                                                                {
                                                                                    block  : 'fieldset',
                                                                                    name   : 'Банковские реквизиты',
                                                                                    content: [
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'Название банка'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'Город (банка)'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'БИК'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'Корреспондентский счет'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'Расчетный счет'
                                                                                        }

                                                                                    ]
                                                                                },
                                                                                {
                                                                                    block  : 'fieldset',
                                                                                    name   : 'Контактное лицо',
                                                                                    content: [
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'Телефон '
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            name       : 'orgname',
                                                                                            placeholder: 'Контактное лицо'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block  : 'radio-switcher',
                                                            content: [
                                                                {
                                                                    elem   : 'header',
                                                                    content: 'Получение товара'
                                                                },
                                                                {
                                                                    elem   : 'list',
                                                                    content: [
                                                                        {
                                                                            elem   : 'item',
                                                                            mix    : [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', mods: { type: 'radio' }, name: 'pay-method', value: 'cash', checked: true, label: 'Самовывоз ' }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            mix    : [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', mods: { type: 'radio' }, name: 'pay-method', value: 'cash', label: 'Доставка по Санкт-Петербургу' }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            mix    : [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', mods: { type: 'radio' }, name: 'pay-method', value: 'cash', label: 'Доставка в регионы' }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'tabs',
                                                                    content: [
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: {
                                                                                block  : 'fieldset',
                                                                                name   : 'Где вам удобнее забрать товар?',
                                                                                content: [
                                                                                    {
                                                                                        block  : 'select',
                                                                                        title  : 'Выберите магазин',
                                                                                        options: [
                                                                                            { label: 'Главный магазин', value: 0 },
                                                                                            { label: '1 магазин', value: 1},
                                                                                            { label: '2 магазин', value: 2 },
                                                                                            { label: '3 магазин', value: 3 },
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: ''
                                                                        },
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: [
                                                                                {
                                                                                    block  : 'fieldset',
                                                                                    content: [
                                                                                        {
                                                                                            block      : 'input',
                                                                                            placeholder: 'ФИО',
                                                                                            name       : 'fio'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            placeholder: 'Телефон',
                                                                                            name       : 'phone'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            placeholder: 'Паспортные данные',
                                                                                            name       : 'passport'
                                                                                        },
                                                                                        {
                                                                                            block      : 'input',
                                                                                            placeholder: 'Полный адрес доставки'
                                                                                        },
                                                                                        {
                                                                                            block: 'input',
                                                                                            type : 'checkbox',
                                                                                            name : 'agree',
                                                                                            label: 'Я даю своё согласие компании ООО «Бот-Трейдинг» на обработку и передачу моей личной информации транспортной компании для оформления доставки моего заказа. '
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'next',
                                                            content: { block: 'button', mods: { type: 'submit', state: 'disable' }, content: 'Далее' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem   : 'tab',
                                                    content: [
                                                        {
                                                            block  : 'order-list',
                                                            content: [
                                                                {
                                                                    elem   : 'header',
                                                                    content: [
                                                                        {
                                                                            elem   : 'header-item',
                                                                            content: 'Товар'
                                                                        },
                                                                        {
                                                                            elem: 'header-item'
                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            content: 'Кол-во'
                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            content: 'Цена, руб.'
                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            content: 'Удалить'
                                                                        }

                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'list',
                                                                    content: [
                                                                        {
                                                                            elem   : 'item',
                                                                            content: [
                                                                                {
                                                                                    elem   : 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'item-name',
                                                                                            content: 'Надувная лодка Хантер 290 Р'
                                                                                        },
                                                                                        {
                                                                                            elem   : 'item-qualif',
                                                                                            content: 'цвет'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'item-name',
                                                                                    content: 'Надувная лодка Хантер 290 Р'
                                                                                },
                                                                                {
                                                                                    elem   : 'counter',
                                                                                    content: 4
                                                                                },
                                                                                {
                                                                                    elem   : 'price',
                                                                                    content: { block: 'b-price', value: 38790, mods: { currency: 'empty' } }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'total',
                                                                    content: [
                                                                        {
                                                                            elem   : 'total-text',
                                                                            content: 'Стоимость заказа:'
                                                                        },
                                                                        {
                                                                            elem   : 'total-value',
                                                                            content: { block: 'b-price', value: 999999, mods: { currency: 'empty' } }
                                                                        }
                                                                    ]
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            block  : 'order-params-info',
                                                            content: [
                                                                {
                                                                    elem   : 'delivery-place',
                                                                    content: 'самовывоз, Москва, ул. Амурская д.7., 24.03.2013'
                                                                },
                                                                {
                                                                    elem   : 'contact-person',
                                                                    content: 'Контактное лицо: Елизаров Максим'

                                                                },
                                                                {
                                                                    elem   : 'contact-phone',
                                                                    content: 'Мобильный телефон +7 (906) 229-73-36'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'confirm',
                                                            content: { block: 'button', mods: { type: 'submit', state: 'disable' }, content: 'Подтверждаю заказ' }
                                                        }
                                                    ],
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            block  : 'footer',
            content: [
                {
                    block  : 'wrapper-fix-width',
                    mods   : { width: '960' },
                    content: [
                        {
                            block   : 'footer',
                            elem    : 'column',
                            elemMods: { position: 'left' },
                            content : [
                                {
                                    block  : 'contacts',
                                    mods   : { color: 'e5e5e5' },
                                    content: [
                                        {
                                            elem   : 'phone',
                                            content: [
                                                {
                                                    elem   : 'phone-city-code',
                                                    content: '812'
                                                },
                                                {
                                                    elem   : 'phone-number',
                                                    content: '320-02-60'
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'link',
                                            content: {
                                                block  : 'b-link',
                                                mods   : { pseudo: 'yes' },
                                                content: 'Обратный звонок'
                                            }
                                        },
                                        {
                                            elem   : 'address',
                                            content: 'Санкт-Петербург, ул. Профессора Качалова, 8'
                                        }
                                    ]
                                },
                                {
                                    block  : 'copyright',
                                    content: 'ООО «Производственно-торговая Компания Хантер — производство и продажа надувных лодок Хантер» '
                                }
                            ]
                        },
                        {
                            block   : 'footer',
                            elem    : 'column',
                            elemMods: { position: 'center' },
                            content : [
                                {
                                    block: 'search'
                                },
                                {
                                    block  : 'menu',
                                    content: [
                                        {
                                            elem: 'item',
                                            name: 'Вакансии',
                                            url : '/vacancies/'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Отзывы',
                                            url : '/feedback/'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block   : 'footer',
                            elem    : 'column',
                            elemMods: { position: 'right' },
                            content : [
                                {
                                    block     : 'studio-idei',
                                    mods      : { color: '865151' },
                                    projectUrl: 'project-url'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
