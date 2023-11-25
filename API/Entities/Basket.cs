using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItem> Items { get; set; } = new();

        public void AddItem(Product product, int quantity)
        {
            var item = Items.FirstOrDefault(i => i.ProductId == product.Id);
            if (item == null)
            {
                Items.Add(new BasketItem
                {
                    Product = product,
                    Quantity = quantity
                });
            }
            else
            {
                item.Quantity += quantity;
            }
        }

        public void RemoveItem(int productId, int quantity) 
        {
            var item = Items.FirstOrDefault(i => i.ProductId == productId);
            if (item != null)
            {
                if (item.Quantity > quantity)
                {
                    item.Quantity -= quantity;
                }
                else
                {
                    Items.Remove(item);
                }
            }

            /* option 2 if the one at the top doesn't work properly with 0
            var item = Items.FirstOrDefault(i => i.ProductId == productId);
            if (item == null) return;
            item.Quantity -= quantity;
            if (item.Quantity == 0) Items.Remove(item);
            */
        }
    }
}