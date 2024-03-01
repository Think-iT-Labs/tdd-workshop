import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should lower sellIn and quality by one', () => {
    const gildedRose = new GildedRose([new Item('foo', 5, 5)]);


    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(4);
  });

  it('should lower quality by two when sell by date has been passed', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 5)]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(3);
  });

  it('should never have quality less than zero', () => {
    const gildedRose = new GildedRose([new Item('foo', -10, 0)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  it('should return qualiy zero for when theinput for quality is negative', () => {
    const gildedRose = new GildedRose([new Item('foo', -10, -10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });
});
