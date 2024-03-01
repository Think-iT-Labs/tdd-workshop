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
});
