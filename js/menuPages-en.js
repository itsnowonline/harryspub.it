/* ============================================================
   PAGE 0 — HOME PAGE TEMPLATE (FULL HOME SCREEN) — ENGLISH
============================================================ */
export const page0HTML = `
<div id="page0" class="homePage">

    <header class="topbar">
        <div class="topbar-inner">

            <div class="logo-wrap">
                <img src="assets/img/logo.png" class="nav-logo" alt="">
            </div>

            <div class="nav-text">
                <h1 class="nav-tagline">Eat • Drink • Have Fun</h1>
            </div>

            <nav class="main-nav">
                <button class="nav-link">Menu</button>
                <button class="nav-link">Contact</button>
                <button class="nav-link">Italiano</button>
            </nav>

        </div>
    </header>

    <div class="home-bg"></div>

    <footer class="footer">
        <div class="footer-icons">

            <button class="f-item">
                <img src="assets/svg/email.svg" class="f-icon-img">
                <span class="f-label">Email</span>
            </button>

            <button class="f-item">
                <img src="assets/svg/facebook.svg" class="f-icon-img">
                <span class="f-label">Facebook</span>
            </button>

            <button class="f-item">
                <img src="assets/svg/call.svg" class="f-icon-img">
                <span class="f-label">Call</span>
            </button>

            <button class="f-item">
                <img src="assets/svg/instagram.svg" class="f-icon-img">
                <span class="f-label">Instagram</span>
            </button>

            <button class="f-item">
                <img src="assets/svg/map.svg" class="f-icon-img">
                <span class="f-label">Map</span>
            </button>

        </div>
    </footer>

</div>
`;

/* ============================================================
   PAGE 1 — MENU PAGE 1 (ONLY FLOATING BUTTONS) — ENGLISH
============================================================ */
export const page8HTML = `
<div class="menuPage">

    <div class="floating-menu-btns">
        <button class="home-btn">Home</button>
        <button class="nav-link">Contact</button>
        <button class="nav-link">Italiano</button>
    </div>

    <h1 class="menu-title">HARRY'S PUB</h1>

    <div class="img-top-right img-slot"
     style="background-image:url('assets/menu/aperitivo.png');">
</div>

    <h2 class="section-title">APERITIF</h2>

    <div class="menu-item">
        <span class="item-name">BRUSCHETTA</span>
        <span class="item-price">5,00€</span>
    </div>
    <p class="item-desc">tomato and basil / olive cream / burrata and anchovies</p>

    <div class="menu-item">
        <span class="item-name">MINI SANDWICHES</span>
        <span class="item-price">5,00€</span>
    </div>
    <p class="item-desc">tuna and olives / cooked ham and cheese</p>

    <div class="menu-item">
        <span class="item-name">CAPRESE</span>
        <span class="item-price">5,00€</span>
    </div>
    <p class="item-desc">tomato, mozzarella, olive oil, oregano, salt</p>

    <h2 class="section-title">FRIED FOOD</h2>

    <div class="img-middle img-slot"
     style="background-image:url('assets/menu/fries.png');">
</div>

    <div class="menu-item"><span class="item-name">MIXED FRIED PLATTER</span><span class="item-price">9,00€</span></div>
    <div class="menu-item"><span class="item-name">FRENCH FRIES (STICK)</span><span class="item-price">4,00€</span></div>
    <div class="menu-item"><span class="item-name">FRENCH FRIES (DIPPERS)</span><span class="item-price">5,00€</span></div>
    <div class="menu-item"><span class="item-name">ONION RINGS</span><span class="item-price">5,00€</span></div>

    <div class="menu-item">
        <span class="item-name">CHICKEN WINGS</span>
        <span class="item-price">7,00€</span>
    </div>
    <p class="item-desc">crispy chicken wings</p>

    <div class="menu-item">
        <span class="item-name">CHICKEN TENDERS / STRIPS</span>
        <span class="item-price">7,00€</span>
    </div>
    <p class="item-desc">tender and crispy chicken fillets, breaded and golden fried</p>

    <div class="menu-item">
        <span class="item-name">CHICKEN NUGGETS</span>
        <span class="item-price">5,00€</span>
    </div>

    <div class="img-bottom-right img-slot"
     style="background-image:url('assets/menu/alette.png');">
</div>

</div>
`;

/* ============================================================
   PAGE 2 — MENU PAGE 2 (ONLY FLOATING BUTTONS) — ENGLISH
============================================================ */
export const page2HTML = `
<div class="menuPage">

    <div class="floating-menu-btns">
        <button class="home-btn">Home</button>
        <button class="nav-link">Contact</button>
        <button class="nav-link">Italiano</button>
    </div>

    <h1 class="menu-title">HARRY'S PUB</h1>

    <div class="img-top-right img-slot"
     style="background-image:url('assets/menu/panino.png');">
</div>

    <h2 class="section-title">PUCCE</h2>

    <div class="menu-item">
        <span class="item-name">SALENTINA</span>
        <span class="item-price">7,00€</span>
    </div>
    <p class="item-desc">raw ham, fior di latte mozzarella, tomato and rocket, extra virgin olive oil, oregano</p>

    <div class="menu-item">
        <span class="item-name">SMOKY CHICKEN</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">fried chicken strips, iceberg lettuce, ranch sauce</p>

    <div class="menu-item">
        <span class="item-name">SPICY BBQ</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">BBQ chicken bites, crispy onion, cheddar, BBQ sauce</p>

    <div class="menu-item">
        <span class="item-name">CHEDDAR</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">beef burger, cheddar, lettuce, mayo</p>

    <div class="menu-item">
        <span class="item-name">BLACK LIST</span>
        <span class="item-price">12,00€</span>
    </div>
    <p class="item-desc">beef burger, pulled pork, BBQ sauce, sun-dried tomatoes, grana cheese, lettuce</p>

    <div class="menu-item">
        <span class="item-name">HARRY'S SPECIAL</span>
        <span class="item-price">12,00€</span>
    </div>
    <p class="item-desc">beef burger, bacon, emmental, caramelized onion</p>

</div>
`;

/* ============================================================
   PAGE 3 — BURGER MENU (ONLY FLOATING BUTTONS) — ENGLISH
============================================================ */
export const page3HTML = `
<div class="menuPage">

    <div class="floating-menu-btns">
        <button class="home-btn">Home</button>
        <button class="nav-link">Contact</button>
        <button class="nav-link">Italiano</button>
    </div>

    <div class="img-top-left img-slot"
     style="background-image:url('assets/menu/tlb.png');">
</div>

    <h1 class="menu-title">HARRY'S PUB</h1>

    <h2 class="section-title">BUNS</h2>

    <div class="menu-item">
        <span class="item-name">CRUNCHY KICK</span>
        <span class="item-price">6,00€</span>
    </div>
    <p class="item-desc">extra crispy fried chicken, cheddar, lettuce, tomato, spicy sauce</p>

    <div class="menu-item">
        <span class="item-name">DOUBLE CRUNCH</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">double crispy fillet, cheddar, crispy onion, mayo, tomato</p>

    <div class="menu-item">
        <span class="item-name">GOLDEN CHICKEN</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">breaded chicken cutlet, tomatoes, lettuce, mayonnaise</p>

    <div class="menu-item">
        <span class="item-name">PROCEDIMENTO</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">beef burger, cheddar, tomato, green lettuce, mayonnaise</p>

    <div class="menu-item">
        <span class="item-name">STRALCIO</span>
        <span class="item-price">14,00€</span>
    </div>
    <p class="item-desc">double beef burger, double cheddar, tomato, green lettuce, mayonnaise</p>

    <div class="img-bottom-center img-slot"
     style="background-image:url('assets/menu/brb.png');">
</div>

</div>
`;

/* ============================================================
   PAGE 4 — PINSE + CARNE MENU (ONLY FLOATING BUTTONS) — ENGLISH
============================================================ */
export const page4HTML = `
<div class="menuPage">

    <div class="floating-menu-btns">
        <button class="home-btn">Home</button>
        <button class="nav-link">Contact</button>
        <button class="nav-link">Italiano</button>
    </div>

    <div class="img-top-right img-slot"
     style="background-image:url('assets/menu/pizza.png');">
</div>

    <h1 class="menu-title">HARRY'S PUB</h1>

    <h2 class="section-title">PINSA</h2>

    <div class="menu-item">
        <span class="item-name">MARGHERITA</span>
        <span class="item-price">7,00€</span>
    </div>
    <p class="item-desc">tomato, mozzarella</p>

    <div class="menu-item">
        <span class="item-name">DIAVOLA</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">tomato, scamorza cheese, spicy salami</p>

    <div class="menu-item">
        <span class="item-name">ARTICOLO</span>
        <span class="item-price">10,00€</span>
    </div>
    <p class="item-desc">
        fiordilatte mozzarella, Martina Franca capocollo, stracciatella
    </p>

    <div class="menu-item">
        <span class="item-name">ASSOLUZIONE</span>
        <span class="item-price">10,00€</span>
    </div>
    <p class="item-desc">salmon, stracciatella, rocket</p>

    <div class="menu-item">
        <span class="item-name">PECCATORE</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">
        tomato, milk mozzarella, ventricina salami, gorgonzola
    </p>

    <div class="menu-item">
        <span class="item-name">PARCELLA</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">
        tomato, mozzarella, sausage, fries
    </p>

    <div class="menu-item">
        <span class="item-name">PORKO</span>
        <span class="item-price">10,00€</span>
    </div>
    <p class="item-desc">
        pulled pork, yellow datterino tomatoes, caramelized onion, cheddar
    </p>
</div>
`;

/* ============================================================
   PAGE 5 — MEAT PLATTERS (MATCHED TO PAGE 4 FORMAT) — ENGLISH
============================================================ */
export const page5HTML = `
<div class="menuPage">

    <div class="floating-menu-btns">
        <button class="home-btn">Home</button>
        <button class="nav-link">Contact</button>
        <button class="nav-link">Italiano</button>
    </div>

    <div class="img-top-right img-slot"
     style="background-image:url('assets/menu/carnea.png');">
</div>

    <h1 class="menu-title">HARRY'S PUB</h1>

    <h2 class="section-title">MEAT PLATTERS</h2>

    <div class="menu-item">
        <span class="item-name">CONDANNA FOR 1 PERSON</span>
        <span class="item-price">15,00€</span>
    </div>
    <p class="item-desc">
        beef steak, chicken breast, 100g beef burger, sweet bombetta, sausage
    </p>

    <div class="menu-item">
        <span class="item-name">CONDANNA FOR 2 PEOPLE</span>
        <span class="item-price">27,00€</span>
    </div>
    <p class="item-desc">
        2 beef steaks, 2 chicken breasts, 2 beef burgers (100g each),
        2 sweet bombette, 2 sweet sausages, 2 slices of capocollo
    </p>

    <div class="menu-item">
        <span class="item-name">SAN VITTORE</span>
        <span class="item-price">11,00€</span>
    </div>
    <p class="item-desc">
        200g beef burger, capocollo, crispy bacon, green salad, egg
    </p>

    <div class="menu-item">
        <span class="item-name">REBIBBIA</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">
        sliced chicken, rocket salad, cherry tomatoes
    </p>

    <div class="menu-item">
        <span class="item-name">BEEF TAGLIATA</span>
        <span class="item-price">20,00€</span>
    </div>
    <p class="item-desc">
        beef, salad, barbecue sauce, cabbage
    </p>

    <div class="menu-item">
        <span class="item-name">BAVARIAN SAUSAGE</span>
        <span class="item-price">12,00€</span>
    </div>
    <p class="item-desc">
        fries, cabbage
    </p>

    <div class="menu-item">
        <span class="item-name">ARROSTICINI</span>
        <span class="item-price">2€/PCS</span>
    </div>
    <p class="item-desc">
        lamb meat skewers
    </p>

    <div class="img-middle img-slot"
     style="background-image:url('assets/menu/carneb.png');">
</div>

</div>
`;

/* ============================================================
   PAGE 6 — SALADS (ONLY FLOATING BUTTONS) — ENGLISH
============================================================ */
export const page6HTML = `
<div class="menuPage">

    <div class="floating-menu-btns">
        <button class="home-btn">Home</button>
        <button class="nav-link">Contact</button>
        <button class="nav-link">Italiano</button>
    </div>

    <div class="img-top-right img-slot"
     style="background-image:url('assets/menu/bowl.png');">
</div>

    <h1 class="menu-title">HARRY'S PUB</h1>

    <h2 class="section-title">SALADS</h2>

    <div class="menu-item">
        <span class="item-name">CAESAR SALAD</span>
        <span class="item-price">10,00€</span>
    </div>
    <p class="item-desc">
        mixed salad with fresh tomatoes, grilled chicken, golden croutons and homemade Caesar dressing
    </p>

    <div class="menu-item">
        <span class="item-name">SALMON SALAD</span>
        <span class="item-price">12,00€</span>
    </div>
    <p class="item-desc">
        grilled salmon with mixed salad and fresh cherry tomatoes, finished with lemon and honey dressing
    </p>

    <div class="menu-item">
        <span class="item-name">YOUR CHOICE</span>
        <span class="item-price">8,00€</span>
    </div>
    <p class="item-desc">
        with mixed salad and tomatoes
    </p>

    <div class="img-middle img-slot"
     style="background-image:url('assets/menu/leaf.png');">
</div>

</div>
`;

/* ============================================================
   PAGE 7 — BEER MENU — ENGLISH
============================================================ */
export const page7HTML = `
<div class="menuPage">

<div class="floating-menu-btns">
        <button class="home-btn">Home</button>
        <button class="nav-link">Contact</button>
        <button class="nav-link">Italiano</button>
    </div>

    <div class="img-top-right img-slot"
     style="background-image:url('assets/menu/glass.png');">
</div>

    <h1 class="menu-title">HARRY’S PUB</h1>

    <h2 class="section-title">BEERS</h2>
    <h3 class="sub-title">ON TAP</h3>

    <div class="beer-block">
        <div class="beer-left">
            <div class="beer-name">ICHNUSA UNFILTERED</div>
            <div class="beer-desc">
                unfiltered blonde lager, bottom fermentation, golden color, with herbal aromas and notes of yellow fruit and apricot
            </div>
        </div>
        <div class="beer-right">
            <div class="grad">ALCOHOL: 5.0%</div>
            <div class="sizes">0.2LT €3.00<br>0.4LT €5.00</div>
        </div>
    </div>

    <div class="beer-block">
        <div class="beer-left">
            <div class="beer-name">MORETTI BLONDE</div>
            <div class="beer-desc">
                blonde lager, bottom fermentation, malty taste with a slightly bitter finish
            </div>
        </div>
        <div class="beer-right">
            <div class="grad">ALCOHOL: 4.6%</div>
            <div class="sizes">0.2LT €2.50<br>0.4LT €4.50</div>
        </div>
    </div>

    <div class="beer-block">
        <div class="beer-left">
            <div class="beer-name">MORETTI RED</div>
            <div class="beer-desc">
                red lager, bottom fermentation, notes of caramel and licorice
            </div>
        </div>
        <div class="beer-right">
            <div class="grad">ALCOHOL: 7.2%</div>
            <div class="sizes">0.2LT €3.00<br>0.4LT €5.00</div>
        </div>
    </div>

    <div class="img-middle img-slot"
     style="background-image:url('assets/menu/bottle.png');">
</div>

    <h2 class="section-title">BEERS</h2>
    <h3 class="sub-title">BOTTLED</h3>

    <div class="bottle-grid">

        <div class="col">
            <div class="beer-name">PARANOIA (0.33LT)</div>
            <div class="beer-desc">
                pale yellow, unfiltered. notes of tropical and citrus fruits, soft and rounded taste.
                Full-bodied and refreshing, moderately bitter but well balanced between tropical sweetness and citrus notes.
            </div>
            <div class="beer-price">5.00€</div>

            <div class="beer-name">DAB EXPORT (0.33LT)</div>
            <div class="beer-desc">clear blonde lager, clean aromas...</div>
            <div class="beer-price">2.50€</div>

            <div class="beer-name">DAB HOPPY LAGER (0.33LT)</div>
            <div class="beer-desc">intense flavor, citrus notes...</div>
            <div class="beer-price">3.00€</div>

            <div class="beer-name">HEINEKEN (0.33LT)</div>
            <div class="beer-desc">lager, smooth taste...</div>
            <div class="beer-price">2.50€</div>

            <div class="beer-name">CERES (0.33LT)</div>
            <div class="beer-desc">wine-like and fruity aroma...</div>
            <div class="beer-price">3.50€</div>
        </div>

        <div class="col">
            <div class="beer-name">DAURA (0.33LT)</div>
            <div class="beer-desc">smooth and balanced taste...</div>
            <div class="beer-price">3.50€</div>

            <div class="beer-name">AVERBODE (0.33LT)</div>
            <div class="beer-desc">hoppy abbey beer...</div>
            <div class="beer-price">5.00€</div>

            <div class="beer-name">DAB KELLER (0.50LT)</div>
            <div class="beer-desc">unfiltered blonde, raw style...</div>
            <div class="beer-price">5.00€</div>

            <div class="beer-name">TENNENT’S (0.33LT)</div>
            <div class="beer-desc">pinkish-golden color...</div>
            <div class="beer-price">3.50€</div>
        </div>

    </div>

</div>
`;

/* ============================================================
   PAGE 8 — INDIAN SPECIAL (FIXED WITH ALL IMAGES) — ENGLISH
============================================================ */
export const page1HTML = `
<div class="menuPage">

    <div class="floating-menu-btns">
        <button class="home-btn">Home</button>
        <button class="nav-link">Contact</button>
        <button class="nav-link">Italiano</button>
    </div>

    <!-- TOP IMAGES -->
    <div class="img-top-left img-slot" 
        style="background-image:url('../assets/menu/samose.png'); 
        width:150px; height:130px; top:45px; left:5px;">
    </div>

    <div class="img-top-right img-slot" 
        style="background-image:url('../assets/menu/mixing.png'); 
        width:150px; height:130px; top:45px; right:5px;">
    </div>

    <h1 class="menu-title">INDIAN<br>SPECIAL</h1>

    <h2 class="section-title">SNACKS</h2>

    <!-- ITEM 1 -->
    <div class="menu-item">
        <span class="item-name">SAMOSA CRUNCH</span>
        <span class="item-price">5,00€</span>
    </div>
    <p class="item-desc">
        crispy pastry triangles filled with spiced vegetables, fried and served with mint chutney
    </p>

    <!-- ITEM 2 -->
    <div class="menu-item">
        <span class="item-name">CHICKEN PAKORA</span>
        <span class="item-price">6,00€</span>
    </div>
    <p class="item-desc">
        marinated chicken bites, fried in spiced batter, served with yogurt sauce
    </p>

    <!-- ⭐ PIATTI IMAGE -->
    <div class="img-slot" 
     style="background-image:url('assets/menu/biriyani.png');
     width:160px; height:130px; top:330px; right:10px; opacity:0.15;">
</div>

    <h2 class="section-title">MAIN DISHES</h2>

    <!-- ITEM 3 -->
    <div class="menu-item">
        <span class="item-name">CHICKEN BIRYANI</span>
        <span class="item-price">9,00€</span>
    </div>
    <p class="item-desc">
        fragrant basmati rice cooked with spices, marinated chicken, crispy onions and fresh coriander, served with yogurt raita
    </p>

    <!-- ITEM 4 -->
    <div class="menu-item">
        <span class="item-name">BUTTER CHICKEN WITH RICE</span>
        <span class="item-price">12,00€</span>
    </div>
    <p class="item-desc">
        chicken in a creamy butter and tomato sauce, mildly spiced, served with basmati rice and butter naan
    </p>

    <!-- ⭐ TIKKA IMAGE -->
    <div class="img-slot" 
        style="background-image:url('../assets/menu/riso.png');
        width:170px; height:140px; top:610px; right:5px; opacity:0.15;">
    </div>

    <!-- ITEM 5 -->
    <div class="menu-item">
        <span class="item-name">CHICKEN TIKKA MASALA</span>
        <span class="item-price">12,00€</span>
    </div>
    <p class="item-desc">
        marinated chicken pieces cooked in a spiced tomato and cream sauce, served with basmati rice
    </p>

    <!-- ITEM 6 -->
    <div class="menu-item">
        <span class="item-name">DAL TADKA</span>
        <span class="item-price">8,00€</span>
    </div>
    <p class="item-desc">
        spiced lentils tempered with clarified butter, coriander and spices, served with basmati rice
    </p>

    <h2 class="section-title">SIDES</h2>

    <!-- ITEM 7 -->
    <div class="menu-item">
        <span class="item-name">INDIAN BREAD</span>
        <span class="item-price">—</span>
    </div>
    <p class="item-desc">
        soft, light and perfect to pair with curry
    </p>

    <!-- ITEM 8 -->
    <div class="menu-item">
        <span class="item-name">PAPPAD</span>
        <span class="item-price">—</span>
    </div>
    <p class="item-desc">
        large crispy chips made from lentil or chickpea flour, lightly spiced
    </p>

</div>
`;