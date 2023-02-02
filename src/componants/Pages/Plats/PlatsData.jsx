import { v4 as uuidv4 } from "uuid";


// 1 = Entrées, 2 = Plats, 3 = Dessert, 4 = Soft, 5: Alcool


const platsData = [
    {
        id: uuidv4(),
        categorie: 1,
        image: 'https://www.finedininglovers.fr/sites/g/files/xknfdk1291/files/styles/recipes_1200_1200_fallback/public/2020-05/ricette_antipasti.jpg?itok=lhnZF46z',
        prix: 6.99,
        name: 'Arancini'
    },
    {
        id: uuidv4(),
        categorie: 3,
        image: 'https://img-3.journaldesfemmes.fr/l9seVFkfC0yj2R_rUg_XsvQ0qdM=/1500x/smart/44281a5103b64c56937245ad93f73c69/ccmcms-jdf/30061503.jpg',
        prix: 7.99,
        name: 'Choux à la crème pâtissière'
    },
    {
        id: uuidv4(),
        categorie: 4,
        image: 'https://www.nicepng.com/png/detail/922-9227950_cest-la-naissance-de-la-plante-oasis-oasis.png',
        prix: 3.99,
        name: 'Oasis'

    },
    {
        id: uuidv4(),
        categorie: 4,
        image: 'https://www.1min30.com/wp-content/uploads/2017/05/Red-Bull-logo-1.jpg',
        prix: 3.99,
        name: 'Redbull'
    },
    {
        id: uuidv4(),
        categorie: 1,
        image: 'https://www.aux-fourneaux.fr/wp-content/uploads/2014/07/tartine-basque-de-philippe-etchebest1.jpg',
        prix: 7.99,
        name: 'Tartine Basque'

    },
    {
        id: uuidv4(),
        categorie: 2,
        image: 'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/fiches-cuisine/tous-les-themes/plats/45279226-4-fre-FR/Recettes-Plats.jpg',
        prix: 12.99,
        name: 'Plat'

    },
    {
        id: uuidv4(),
        categorie: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26JQqFiF4aZVPPJxN0nsT57TGI_OQXsk16w&usqp=CAU',
        prix: 13.99,
        name: 'Champi'
    },
    {
        id: uuidv4(),
        categorie: 3,
        image: 'https://www.finedininglovers.fr/sites/g/files/xknfdk1291/files/styles/recipes_1200_1200_fallback/public/2020-05/ricette_dessert_0.jpg?itok=BcsQRdmo',
        prix: 8.99,
        name: 'Rouge'

    },
    {
        id: uuidv4(),
        categorie: 4,
        image: 'https://www.hellopro.fr/images/produit-2/0/7/8/fuze-tea-boisson-au-the-saveur-peche-canette-slim-de-33-cl.jpg',
        prix: 2.99,
        name: 'Fuze Tea'

    },
    {
        id: uuidv4(),
        categorie: 2,
        image: 'https://cdn.pratico-pratiques.com/app/uploads/sites/4/2019/11/12135550/ragout-de-boeuf-et-porc-bourguignon.jpg',
        prix: 18.99,
        name: 'Ragout de Boeuf'

    },
    {
        id: uuidv4(),
        categorie: 3,
        image: 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Frecettes-de-cuisine.2Frecettes-desserts-preparer-la-veille-a-l-avance-47712.2F14875987-1-fre-FR.2Fdesserts-a-preparer-la-veille-nos-recettes-pratiques.2Ejpg/750x562/quality/80/crop-from/center/cr/wqkgTW9udCBCbGFuYyAvIEZlbW1lIEFjdHVlbGxl/desserts-a-preparer-la-veille-nos-recettes-pratiques.jpeg',
        prix: 6.99,
        name: 'Flan'

    },
    {
        id: uuidv4(),
        categorie: 1,
        image: 'https://recette.supertoinette.com/150673/b/mini-cakes-au-thon-et-aux-legumes.jpg',
        prix: 13.99,
        name: 'Cakes au Thon'

    },
    {
        id: uuidv4(),
        categorie: 5,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Beer_mug_transparent.png/1200px-Beer_mug_transparent.png',
        prix: 15.99,
        name: 'Bière blonde'

    },
    {
        id: uuidv4(),
        categorie: 1,
        image: 'https://img-3.journaldesfemmes.fr/enLKN6NCiP7GTS647jcOKOXg4q8=/1240x/smart/674b149d981045ca9dfe43f8ec85bcc3/ccmcms-jdf/10198709-20-entrees-chics-pour-les-fetes.jpg',
        prix: 17.99,
        name: 'Crêpes'

    },
    {
        id: uuidv4(),
        categorie: 3,
        image: 'http://les2quiches.com/wp-content/uploads/2021/07/cranachan-traditionnel.jpg',
        prix: 8.99,
        name: 'Cranachan'

    },
    {
        id: uuidv4(),
        categorie: 1,
        image: 'https://cdn.pratico-pratiques.com/app/uploads/sites/3/2018/08/20194329/mozzarella-en-croute-de-bacon-style-fondue-600x600.jpeg',
        prix: 12.99,
        name: 'Mozzarella en croute'

    },
    {
        id: uuidv4(),
        categorie: 2,
        image: 'https://cdn.pratico-pratiques.com/app/uploads/sites/4/2018/08/30150524/boeuf-bourguignon-mijoteuse.jpeg',
        prix: 13.99,
        name: 'Boeuf Bourguignon'

    },
    {
        id: uuidv4(),
        categorie: 3,
        image: 'https://img-3.journaldesfemmes.fr/kYaZ5ShrJYYdporl4W-V2lA-qu4=/1500x/smart/e2384d1c32d444528e8ec0881c4d632d/ccmcms-jdf/27162578.jpg',
        prix: 7.99,
        name: 'Tiramisu'

    },
    {
        id: uuidv4(),
        categorie: 5,
        image: 'https://www.ikea.com/fr/fr/images/products/storsint-verre-a-vin-rouge-verre-transparent__0640894_pe700139_s5.jpg',
        prix: 17.99,
        name: 'Vin Rouge'

    },
    {
        id: uuidv4(),
        categorie: 2,
        image: 'https://img.circulaire-en-ligne.ca/wp-content/uploads/boeuf-africain.jpg',
        prix: 18.99,
        name: 'Boeuf'

    },
    {
        id: uuidv4(),
        categorie: 5,
        image: 'https://rucherdumoulin.com/43327-large_default/biere-brune-33cl-jolicoeur.jpg',
        prix: 8.99,
        name: 'Bière Brune'

    },
    {
        id: uuidv4(),
        categorie: 4,
        image: 'https://media.carrefour.fr/medias/d560c0c3ff49348c95dc3dd41016f547/p_540x540/05060639127108-h1n1-s01.jpg',
        prix: 8.99,
        name: 'Monster Punch'

    },
    
]

export default platsData;