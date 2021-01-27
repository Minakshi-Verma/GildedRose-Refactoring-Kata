export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {

        this.items.map(x => {

            //"Sulfuras", being a legendary item, never has to be sold or decreases in Quality
            if (x.name.indexOf("Sulfuras") < 0) {

                x.sellIn = x.sellIn - 1;

                if (x.name.indexOf("Backstage passes") >= 0) {
                    if (x.quality > 0 && x.quality < 50) {

                        if (x.sellIn <= 5)
                            x.quality += 3;// Quality increases by 3 when there are 5 days or less
                        else if (x.sellIn <= 10)
                            x.quality += 2; // Quality increases by 2 when there are 10 days or less
                        else x.quality += 1;
                    }
                }
                else if (x.name.indexOf("Aged Brie") >= 0) {
                    if (x.quality > 0 && x.quality < 50) {
                        x.quality += 1;
                    }
                }
                else if (x.name.indexOf("Conjured") >= 0) {
                    //"Conjured" items degrade in Quality twice as fast as normal items
                    if (x.quality > 0 && x.quality < 50) {
                        x.quality = x.quality - 2 < 0 ? 0 : x.quality - 2;
                    }
                }
                else {
                    if (x.quality > 0 && x.quality < 50) {

                        x.quality = x.sellIn < 0 ? ((x.quality - 2 < 0 ? 0 : x.quality - 2)) : (x.quality - 1)                        
                    }
                }
            }
        })


        /*  for (let i = 0; i < this.items.length; i++) {
              if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                  if (this.items[i].quality > 0) {
                      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                          this.items[i].quality = this.items[i].quality - 1
                      }
                  }
              } else {
                  if (this.items[i].quality < 50) {
                      this.items[i].quality = this.items[i].quality + 1
                      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                          if (this.items[i].sellIn < 11) {
                              if (this.items[i].quality < 50) {
                                  this.items[i].quality = this.items[i].quality + 1
                              }
                          }
                          if (this.items[i].sellIn < 6) {
                              if (this.items[i].quality < 50) {
                                  this.items[i].quality = this.items[i].quality + 1
                              }
                          }
                      }
                  }
              }
  
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  this.items[i].sellIn = this.items[i].sellIn - 1;
              }
  
              if (this.items[i].sellIn < 0) {
                  if (this.items[i].name != 'Aged Brie') {
                      if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                          if (this.items[i].quality > 0) {
                              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                  this.items[i].quality = this.items[i].quality - 1
                              }
                          }
                      } else {
                          this.items[i].quality = this.items[i].quality - this.items[i].quality
                      }
                  } else {
                      if (this.items[i].quality < 50) {
                          this.items[i].quality = this.items[i].quality + 1
                      }
                  }
              }
  
              if (this.items[i].name.indexOf('Conjured') > -1) {
                  this.items[i].quality = this.items[i].quality - this.items[i].quality;
              }
          }
  
          return this.items;*/
    }
}
