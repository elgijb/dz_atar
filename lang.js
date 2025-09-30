let currentLang = localStorage.getItem("lang") || "he"

const lang = {
  he: {
    site_name: "עולם הטיולים",
    menu_home: "ראשי",
    menu_news: "חדשות",
    menu_shop: "חנות",
    menu_blog: "בלוג",
    menu_contacts: "צור קשר",
    menu_account: "חשבון",
    register_title: "הרשמה",
    register_btn: "הירשם",
    login_title: "כניסה",
    login_btn: "התחבר",
    email: "דוא״ל",
    password: "סיסמה",
    phone: "מספר טלפון",
    user_exists: "משתמש כבר רשום!",
    register_success: "המשתמש {email} נרשם בהצלחה!",
    login_success: "ברוך הבא, {email}!",
    login_fail: "דוא״ל או סיסמה שגויים.",
    hello_user: "שלום, {email}",
    account_title: "חשבון",
    welcome_title: "ברוכים הבאים לעולם הטיולים",
    welcome_text: "באתר זה תמצאו סקירות וכתבות מפורטות על ערים, מדינות ותרבויות מכל רחבי העולם. המטרה שלנו היא לתת לכם השראה ותכנון טוב יותר לטיולים עתידיים.",
    read_more: "קרא עוד",

    jerusalem_title: "ירושלים",
    jerusalem_text: "ירושלים היא אחת הערים העתיקות ביותר בעולם, בעלת חשיבות דתית ליהדות, נצרות ואסלאם. העיר העתיקה מחולקת לארבעה רבעים: יהודי, נוצרי, מוסלמי וארמני. בעיר נמצאים מקומות קדושים ובהם הכותל המערבי, כנסיית הקבר והר הבית. ירושלים משלבת היסטוריה עשירה עם חיי תרבות מודרניים.",

    telaviv_title: "תל אביב",
    telaviv_text: "תל אביב היא עיר החוף המרכזית בישראל ומרכז הכלכלה, התרבות והפנאי של המדינה. העיר ידועה באדריכלות הבאוהאוס שלה, חופי הים היפים, חיי לילה תוססים ומסעדות מגוונות. תל אביב מכונה גם 'העיר שלא ישנה לעולם' בזכות הקצב המהיר והאנרגיה שלה.",

    blog_title: "בלוג",
    rome_title: "רומא",
    rome_text: "רומא היא בירת איטליה והעיר המרכזית באימפריה הרומית העתיקה. היא ידועה בכינוי 'העיר הנצחית'. בין האתרים המרכזיים: הקולוסיאום, הפורום הרומי והפנתיאון. רומא משלבת היסטוריה מרשימה עם חיי רחוב ססגוניים, שווקים, פיאצות ומטבח איטלקי עשיר.",
    barcelona_title: "ברצלונה",
    barcelona_text: "ברצלונה היא עיר נמל בקטלוניה שבספרד, והיא ידועה ביצירות הארכיטקטורה של אנטוניו גאודי, כגון סגרדה פמיליה ופארק גואל. ברצלונה מציעה שילוב של חופי ים ייחודיים, תרבות אמנותית עשירה וכדורגל בינלאומי עם קבוצת ברצלונה המפורסמת.",
    kyoto_title: "קיוטו",
    kyoto_text: "קיוטו הייתה בירת יפן במשך יותר מאלף שנים והיא נחשבת למרכז התרבותי של המדינה. העיר ידועה במקדשים הבודהיסטיים שלה, גני הזן, טקסי התה המסורתיים ופסטיבלים שנתיים מרשימים. בקיוטו ניתן לחוות את יפן המסורתית לצד מודרניות מתקדמת.",

    contact_title: "צור קשר",
    contact_text: "נשמח לשמוע מכם! מלאו את הטופס ונחזור אליכם בהקדם. ניתן לפנות אלינו בשאלות על טיולים, המלצות או שיתופי פעולה.",
    name: "שם מלא",
    message: "הודעה",
    send_btn: "שלח"
  },

  ru: {
    site_name: "Мир путешествий",
    menu_home: "Главная",
    menu_news: "Новости",
    menu_shop: "Магазин",
    menu_blog: "Блог",
    menu_contacts: "Контакты",
    menu_account: "Аккаунт",
    register_title: "Регистрация",
    register_btn: "Зарегистрироваться",
    login_title: "Вход",
    login_btn: "Войти",
    email: "Эл. почта",
    password: "Пароль",
    phone: "Телефон",
    user_exists: "Такой пользователь уже существует!",
    register_success: "Пользователь {email} успешно зарегистрирован!",
    login_success: "Добро пожаловать, {email}!",
    login_fail: "Неверный email или пароль.",
    hello_user: "Привет, {email}",
    account_title: "Аккаунт",
    welcome_title: "Добро пожаловать в Мир путешествий",
    welcome_text: "Здесь вы найдёте подробные обзоры и статьи о городах, странах и культурах мира. Наша цель — вдохновить вас на новые открытия и помочь в планировании путешествий.",
    read_more: "Читать больше",

    jerusalem_title: "Иерусалим",
    jerusalem_text: "Иерусалим — один из древнейших городов мира, священный для иудеев, христиан и мусульман. Старый город делится на четыре квартала: еврейский, христианский, мусульманский и армянский. Здесь находятся Стена Плача, Храм Гроба Господня и Храмовая гора. Город сочетает богатую историю и современную жизнь.",

    telaviv_title: "Тель-Авив",
    telaviv_text: "Тель-Авив — главный курортный и культурный центр Израиля. Он известен архитектурой Баухаус, пляжами на Средиземном море, ночной жизнью и разнообразной кухней. Город называют «не спящий никогда» благодаря его энергии и ритму.",

    blog_title: "Блог",
    rome_title: "Рим",
    rome_text: "Рим — столица Италии, город с тысячелетней историей. Колизей, Римский форум и Пантеон — главные достопримечательности. Здесь можно почувствовать дыхание античности, прогуливаясь по узким улочкам и площадям. Рим также славится кухней: паста, пицца и джелато.",
    barcelona_title: "Барселона",
    barcelona_text: "Барселона — столица Каталонии и один из самых популярных туристических центров Европы. Архитектура Антонио Гауди, включая Саграда Фамилия и Парк Гуэль, делают город уникальным. Барселона сочетает пляжи, культуру, спорт и гастрономию.",
    kyoto_title: "Киото",
    kyoto_text: "Киото — древняя столица Японии и культурное сердце страны. Город славится тысячами храмов, садами дзен, традиционными чайными церемониями и фестивалями. Киото — идеальное место для знакомства с традиционной Японией.",

    contact_title: "Контакты",
    contact_text: "Мы будем рады вашему сообщению! Заполните форму, и мы свяжемся с вами. Вы можете задавать вопросы о путешествиях, просить советы или предлагать сотрудничество.",
    name: "Имя",
    message: "Сообщение",
    send_btn: "Отправить"
  },

  en: {
    site_name: "Travel World",
    menu_home: "Home",
    menu_news: "News",
    menu_shop: "Shop",
    menu_blog: "Blog",
    menu_contacts: "Contacts",
    menu_account: "Account",
    register_title: "Registration",
    register_btn: "Sign Up",
    login_title: "Login",
    login_btn: "Login",
    email: "Email",
    password: "Password",
    phone: "Phone",
    user_exists: "User already exists!",
    register_success: "User {email} registered successfully!",
    login_success: "Welcome, {email}!",
    login_fail: "Invalid email or password.",
    hello_user: "Hello, {email}",
    account_title: "Account",
    welcome_title: "Welcome to Travel World",
    welcome_text: "Here you will find detailed guides and articles about cities, countries, and cultures around the globe. Our mission is to inspire you to travel and help plan your journeys.",
    read_more: "Read more",

    jerusalem_title: "Jerusalem",
    jerusalem_text: "Jerusalem is one of the oldest cities in the world, sacred to Judaism, Christianity, and Islam. The Old City is divided into four quarters: Jewish, Christian, Muslim, and Armenian. It hosts the Western Wall, the Church of the Holy Sepulchre, and the Temple Mount. Jerusalem combines deep history with modern culture.",
    
    telaviv_title: "Tel Aviv",
    telaviv_text: "Tel Aviv is Israel’s cultural and economic hub on the Mediterranean coast. Known for its Bauhaus architecture, sandy beaches, nightlife, and diverse food culture, Tel Aviv is often called 'the city that never sleeps' for its vibrant rhythm.",
    
    blog_title: "Blog",
    rome_title: "Rome",
    rome_text: "Rome, the capital of Italy, is known as the Eternal City. It was the center of the Roman Empire and today remains a living museum with landmarks like the Colosseum, Roman Forum, and Pantheon. Rome offers a mix of history, vibrant street life, and world-famous Italian cuisine.",
    barcelona_title: "Barcelona",
    barcelona_text: "Barcelona, capital of Catalonia, is a top tourist destination in Europe. The city is famous for Antoni Gaudí’s architecture, including the Sagrada Família and Park Güell. Barcelona combines beaches, art, sports, and Mediterranean food culture.",
    kyoto_title: "Kyoto",
    kyoto_text: "Kyoto, Japan’s ancient capital, is home to thousands of temples and shrines. Known for Zen gardens, tea ceremonies, and festivals, Kyoto offers an authentic glimpse of traditional Japan alongside modern life.",
    
    contact_title: "Contacts",
    contact_text: "We’d love to hear from you! Fill out the form, and we’ll get back to you. Ask us about travel tips, recommendations, or partnerships.",
    name: "Full Name",
    message: "Message",
    send_btn: "Send"
  }
}

function setLanguage(l) {
  currentLang = l
  localStorage.setItem("lang", currentLang)
  applyLanguage()
}

function applyLanguage() {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang")
    if (lang[currentLang][key]) {
      el.textContent = lang[currentLang][key]
    }
  })
  document.querySelectorAll("[data-lang-placeholder]").forEach(el => {
    const key = el.getAttribute("data-lang-placeholder")
    if (lang[currentLang][key]) {
      el.placeholder = lang[currentLang][key]
    }
  })

  if (currentLang === "he") {
    document.documentElement.lang = "he"
    document.documentElement.dir = "rtl"
    document.querySelectorAll("input, textarea").forEach(el => {
      el.style.direction = "rtl"
      el.style.textAlign = "right"
    })
  } else {
    document.documentElement.lang = currentLang
    document.documentElement.dir = "ltr"
    document.querySelectorAll("input, textarea").forEach(el => {
      el.style.direction = "ltr"
      el.style.textAlign = "left"
    })
  }
}
