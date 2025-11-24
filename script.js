// Tailwind CDN config (was inline in index.html)
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'cairo': ['Cairo', 'sans-serif']
            },
            colors: {
                'primary': '#4ade80',
                'secondary': '#fbbf24',
                'accent': '#f3f4f6'
            }
        }
    }
};

// App factory for Alpine x-data
window.app = function () {
    return {
        darkMode: false,
        cartCount: 0,
        favCount: 0,
        mobileMenu: false,
        currentPage: 'home',
        currentCategory: null,
        cart: [],
        favorites: [],
        selectedProduct: null,
        categoryNames: {
            protein: 'بروتين',
            vegetables: 'خضروات',
            drinks: 'مشروبات',
            dairy: 'ألبان',
            carbs: 'نشويات',
            cleaners: 'منظفات',
            legumes: 'بقوليات',
            others: 'أخرى'
        },
        products: {
            protein: [
                { id: 1, name: 'دجاج طازج', price: 45, image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400', desc: 'دجاج طازج عالي الجودة، مذبوح حسب الشريعة الإسلامية، يتميز بطعمه اللذيذ وقيمته الغذائية العالية' },
                { id: 2, name: 'لحم بقري', price: 120, image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400', desc: 'لحم بقري طازج من مزارع محلية، غني بالبروتين والحديد، مثالي للشواء والطبخ' },
                { id: 3, name: 'سمك فيليه', price: 85, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', desc: 'فيليه سمك طازج بدون عظم، غني بالأوميغا 3، مثالي للقلي والشوي' },
                { id: 4, name: 'روبيان', price: 95, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400', desc: 'روبيان طازج حجم كبير، منظف وجاهز للطبخ، طعم بحري أصيل' },
                { id: 5, name: 'لحم غنم', price: 150, image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400', desc: 'لحم غنم طازج من مزارع محلية، طري ولذيذ' },
                { id: 6, name: 'كبدة دجاج', price: 35, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400', desc: 'كبدة دجاج طازجة، غنية بالحديد والفيتامينات' }
            ],
            vegetables: [
                { id: 7, name: 'طماطم', price: 8, image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400', desc: 'طماطم طازجة من المزارع المحلية، حمراء ناضجة، غنية بالفيتامينات' },
                { id: 8, name: 'خيار', price: 6, image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400', desc: 'خيار طازج ومقرمش، مثالي للسلطات والعصائر الصحية' },
                { id: 9, name: 'خس', price: 5, image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400', desc: 'خس أخضر طازج، أوراق مقرمشة ونظيفة، مثالي للسلطات' },
                { id: 10, name: 'جزر', price: 7, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400', desc: 'جزر طازج غني بالفيتامينات، برتقالي اللون، حلو المذاق' },
                { id: 11, name: 'بطاطس', price: 10, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400', desc: 'بطاطس طازجة للطبخ، مثالية للقلي والشوي' },
                { id: 12, name: 'بصل', price: 6, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400', desc: 'بصل طازج، عنصر أساسي في المطبخ العربي' }
            ],
            drinks: [
                { id: 13, name: 'عصير برتقال', price: 15, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400', desc: 'عصير برتقال طبيعي 100%، غني بفيتامين C، منعش ولذيذ' },
                { id: 14, name: 'ماء معدني', price: 3, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400', desc: 'ماء معدني نقي، من أفضل المصادر الطبيعية' },
                { id: 15, name: 'مشروب غازي', price: 5, image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400', desc: 'مشروب غازي منعش، متوفر بنكهات متعددة' },
                { id: 16, name: 'شاي مثلج', price: 8, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400', desc: 'شاي مثلج بنكهة الليمون، منعش ومثالي للصيف' },
                { id: 17, name: 'عصير تفاح', price: 12, image: 'https://images.unsplash.com/photo-1568471173238-64ed8e7e9d8e?w=400', desc: 'عصير تفاح طبيعي، حلو المذاق وصحي' },
                { id: 18, name: 'قهوة باردة', price: 18, image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400', desc: 'قهوة باردة منعشة، مثالية لبداية اليوم' }
            ],
            dairy: [
                { id: 19, name: 'حليب طازج', price: 12, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400', desc: 'حليب طازج كامل الدسم، غني بالكالسيوم والبروتين' },
                { id: 20, name: 'جبنة بيضاء', price: 25, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400', desc: 'جبنة بيضاء طرية، مثالية للفطور والسندويشات' },
                { id: 21, name: 'زبادي', price: 8, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400', desc: 'زبادي طبيعي بدون إضافات، غني بالبروبيوتيك' },
                { id: 22, name: 'لبنة', price: 18, image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400', desc: 'لبنة كريمية طازجة، طعم أصيل ولذيذ' },
                { id: 23, name: 'جبنة شيدر', price: 30, image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400', desc: 'جبنة شيدر فاخرة، مثالية للبرجر والسندويشات' },
                { id: 24, name: 'زبدة', price: 15, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400', desc: 'زبدة طبيعية، مثالية للطبخ والخبز' }
            ],
            carbs: [
                { id: 25, name: 'أرز بسمتي', price: 35, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', desc: 'أرز بسمتي فاخر حبة طويلة، رائحة زكية وطعم مميز' },
                { id: 26, name: 'معكرونة', price: 12, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400', desc: 'معكرونة إيطالية أصلية، متعددة الأشكال' },
                { id: 27, name: 'خبز طازج', price: 5, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', desc: 'خبز طازج يومياً، طري ولذيذ' },
                { id: 28, name: 'شعيرية', price: 10, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', desc: 'شعيرية فاخرة، مثالية للشوربات والأطباق' },
                { id: 29, name: 'برغل', price: 18, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', desc: 'برغل ناعم وخشن، غني بالألياف' },
                { id: 30, name: 'دقيق', price: 20, image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400', desc: 'دقيق أبيض فاخر، مثالي للخبز والمعجنات' }
            ],
            cleaners: [
                { id: 31, name: 'منظف أطباق', price: 15, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400', desc: 'منظف أطباق فعال ضد الدهون، رائحة منعشة' },
                { id: 32, name: 'مسحوق غسيل', price: 45, image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400', desc: 'مسحوق غسيل للملابس البيضاء والملونة، تنظيف عميق' },
                { id: 33, name: 'معطر جو', price: 20, image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400', desc: 'معطر جو برائحة اللافندر، يدوم طويلاً' },
                { id: 34, name: 'منظف أرضيات', price: 25, image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400', desc: 'منظف أرضيات متعدد الاستخدامات، لمعان وتعقيم' },
                { id: 35, name: 'منظف حمامات', price: 22, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400', desc: 'منظف حمامات قوي، يزيل الترسبات والبقع' },
                { id: 36, name: 'مناديل معقمة', price: 18, image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400', desc: 'مناديل معقمة، تقضي على 99.9% من الجراثيم' }
            ],
            legumes: [
                { id: 37, name: 'عدس أحمر', price: 18, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400', desc: 'عدس أحمر عالي الجودة، غني بالبروتين والألياف' },
                { id: 38, name: 'حمص حب', price: 22, image: 'https://images.unsplash.com/photo-1610415946035-bad6fc9f5b8e?w=400', desc: 'حمص حب طبيعي، مثالي للحمص والفلافل' },
                { id: 39, name: 'فول مدمس', price: 15, image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400', desc: 'فول مدمس جاهز للأكل، طعم أصيل ولذيذ' },
                { id: 40, name: 'فاصوليا بيضاء', price: 20, image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400', desc: 'فاصوليا بيضاء مجففة، غنية بالبروتين' },
                { id: 41, name: 'عدس أصفر', price: 16, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400', desc: 'عدس أصفر، مثالي للشوربات' },
                { id: 42, name: 'لوبيا', price: 19, image: 'https://images.unsplash.com/photo-1610415946035-bad6fc9f5b8e?w=400', desc: 'لوبيا طازجة، غنية بالعناصر الغذائية' }
            ],
            others: [
                { id: 43, name: 'زيت زيتون', price: 55, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400', desc: 'زيت زيتون بكر ممتاز، من أجود أنواع الزيتون' },
                { id: 44, name: 'عسل طبيعي', price: 65, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=400', desc: 'عسل طبيعي صافي 100%، فوائد صحية متعددة' },
                { id: 45, name: 'مربى فراولة', price: 18, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400', desc: 'مربى فراولة طبيعية، حلوة ولذيذة' },
                { id: 46, name: 'شوكولاتة', price: 12, image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400', desc: 'شوكولاتة بالحليب فاخرة، طعم لا يقاوم' },
                { id: 47, name: 'مكسرات', price: 40, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400', desc: 'مكسرات مشكلة، محمصة ومملحة' },
                { id: 48, name: 'بهارات', price: 25, image: 'https://images.unsplash.com/photo-1596040033229-a0b3b83b6c4f?w=400', desc: 'بهارات مشكلة، نكهة أصيلة للطبخ' }
            ]
        },
        addToCart(product) {
            const existing = this.cart.find(item => item.id === product.id);
            if (existing) {
                existing.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
            this.cartCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            this.showNotification('تمت الإضافة للسلة');
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.cartCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            this.showNotification('تم الحذف من السلة');
        },
        updateQuantity(productId, change) {
            const item = this.cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    this.removeFromCart(productId);
                }
                this.cartCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            }
        },
        toggleFavorite(product) {
            const index = this.favorites.findIndex(item => item.id === product.id);
            if (index > -1) {
                this.favorites.splice(index, 1);
                this.showNotification('تم الحذف من المفضلة');
            } else {
                this.favorites.push(product);
                this.showNotification('تمت الإضافة للمفضلة');
            }
            this.favCount = this.favorites.length;
        },
        isFavorite(productId) {
            return this.favorites.some(item => item.id === productId);
        },
        showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce';
            notification.textContent = message;
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 2000);
        },
        viewProduct(product) {
            this.selectedProduct = product;
            this.currentPage = 'product-detail';
            window.scrollTo(0, 0);
            setTimeout(() => {
                if (window.productSwiper) {
                    window.productSwiper.destroy();
                }
                window.productSwiper = new Swiper('.productSwiper', {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }, 100);
        },
        viewCategory(category) {
            this.currentCategory = category;
            this.currentPage = 'category';
            window.scrollTo(0, 0);
        },
        getCartTotal() {
            return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },
        init() {
            this.darkMode = localStorage.getItem('darkMode') === 'true';
            this.$watch('darkMode', value => {
                localStorage.setItem('darkMode', value);
                document.documentElement.classList.toggle('dark', value);
            });
        }
    };
};
