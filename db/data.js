db.products.save({ "description" : "Casual Shoes -
Y", "category" : [ "Casual", "Men", "Office", "Fibre" ], "price" : 599, "special
_price" : 349, "sizes" : [ { "size_type" : "XL", "colors" : [ { "color" : "#3322
FF", "stock" : 3 }, { "color" : "#990340", "stock" : 6 } ] }, { "size_type" : "L
", "colors" : [ { "color" : "#3450FF", "stock" : 1 }, { "color" : "#999900", "st
ock" : 2 } ] }, { "size_type" : "M", "colors" : [ { "color" : "#3300FF", "stock"
 : 7 }, { "color" : "#990000", "stock" : 1 } ] } ], "image" : "http://static.yep
me.com//Campaign/43358_small.jpg", "other_images" : [ "http://n2.sdlcdn.com/imgs
/a/m/h/Reebok-Navy-Sport-Shoes-SDL437905561-2-41059.JPG" ] });

db.products.save({"description" : "Casual Shoes -
B", "category" : [ "Casual", "Men", "Office", "Fibre" ], "price" : 599, "special
_price" : 349, "sizes" : [ { "size_type" : "XL", "colors" : [ { "color" : "#3322
FF", "stock" : 3 }, { "color" : "#990340", "stock" : 6 } ] }, { "size_type" : "L
", "colors" : [ { "color" : "#3450FF", "stock" : 1 }, { "color" : "#999900", "st
ock" : 2 } ] }, { "size_type" : "M", "colors" : [ { "color" : "#3300FF", "stock"
 : 7 }, { "color" : "#990000", "stock" : 1 } ] } ], "image" : "http://static.yep
me.com//Campaign/43354_small.jpg", "other_images" : [ "http://n2.sdlcdn.com/imgs
/a/m/h/Reebok-Navy-Sport-Shoes-SDL437905561-2-41059.JPG" ] });

db.products.save({ "description" : "Formal Shoes -
B", "category" : [ "Formals", "Men", "Office", "Fibre" ], "price" : 599, "specia
l_price" : 349, "sizes" : [ { "size_type" : "XL", "colors" : [ { "color" : "#332
2FF", "stock" : 3 }, { "color" : "#990340", "stock" : 6 } ] }, { "size_type" : "
L", "colors" : [ { "color" : "#3450FF", "stock" : 1 }, { "color" : "#999900", "s
tock" : 2 } ] }, { "size_type" : "M", "colors" : [ { "color" : "#3300FF", "stock
" : 7 }, { "color" : "#990000", "stock" : 1 } ] } ], "image" : "http://static.ye
pme.com/Campaign/36074_small.jpg", "other_images" : [ "http://n2.sdlcdn.com/imgs
/a/m/h/Reebok-Navy-Sport-Shoes-SDL437905561-2-41059.JPG" ] });

db.products.save({ "description" : "Formal Shoes -
S", "category" : [ "Formals", "Men", "Office", "Fibre" ], "price" : 599, "specia
l_price" : 349, "sizes" : [ { "size_type" : "XL", "colors" : [ { "color" : "#332
2FF", "stock" : 3 }, { "color" : "#990340", "stock" : 6 } ] }, { "size_type" : "
L", "colors" : [ { "color" : "#3450FF", "stock" : 1 }, { "color" : "#999900", "s
tock" : 2 } ] }, { "size_type" : "M", "colors" : [ { "color" : "#3300FF", "stock
" : 7 }, { "color" : "#990000", "stock" : 1 } ] } ], "image" : "http://static.ye
pme.com/Campaign/43267_small.jpg", "other_images" : [ "http://n2.sdlcdn.com/imgs
/a/m/h/Reebok-Navy-Sport-Shoes-SDL437905561-2-41059.JPG" ] });

db.products.save({ "description" : "Running Shoes -
 Y", "category" : [ "Running", "Men", "Sports", "Fibre" ], "price" : 599, "speci
al_price" : 349, "sizes" : [ { "size_type" : "XL", "colors" : [ { "color" : "#33
22FF", "stock" : 3 }, { "color" : "#990340", "stock" : 6 } ] }, { "size_type" :
"L", "colors" : [ { "color" : "#3450FF", "stock" : 1 }, { "color" : "#999900", "
stock" : 2 } ] }, { "size_type" : "M", "colors" : [ { "color" : "#3300FF", "stoc
k" : 7 }, { "color" : "#990000", "stock" : 1 } ] } ], "image" : "http://static.y
epme.com/Campaign/36107_small.jpg", "other_images" : [ "http://n2.sdlcdn.com/img
s/a/m/h/Reebok-Navy-Sport-Shoes-SDL437905561-2-41059.JPG" ] });

db.products.save({"description" : "Running Shoes -
 X", "category" : [ "Running", "Men", "Sports", "Synthetic" ], "price" : 499, "s
pecial_price" : 449, "sizes" : [ { "size_type" : "XL", "colors" : [ { "color" :
"#3300FF", "stock" : 5 }, { "color" : "#990000", "stock" : 6 } ] }, { "size_type
" : "L", "colors" : [ { "color" : "#3300FF", "stock" : 6 }, { "color" : "#990000
", "stock" : 3 } ] }, { "size_type" : "M", "colors" : [ { "color" : "#3300FF", "
stock" : 7 }, { "color" : "#990000", "stock" : 1 } ] } ], "image" : "http://stat
ic.yepme.com/Campaign/43112_small.jpg", "other_images" : [ "http://static.yepme.
com/Campaign/31106_YPZM_2.jpg", "http://static.yepme.com/Campaign/31106_YPZM_4.j
pg" ] });

db.products.ensureIndex({"category":1});