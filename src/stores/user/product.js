import { defineStore } from 'pinia'

export const useUserProductStore = defineStore('user-product', {
  state: () => ({
    list: [{
      name: 'NewBike',
      imageUrl: 'https://th.bing.com/th/id/OIP.czT2SRpMAu3FzgPR3woQjwHaEL?pid=ImgDet&w=160&h=90&c=7',
      quantity: 10,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 1036,
    },
    {
      name: 'NewBalabubu',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0597/4209/3363/files/jd_U9060HMS-W_bl_480x526.jpg?v=1728561972',
      quantity: 99,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 1050,
    },
    {
      name: 'NewBalabubu',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0597/4209/3363/files/jd_U9060ESE_bl_480x526.jpg?v=1730077542',
      quantity: 435,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 2111,
    },
    {
      name: 'NewBalabubu',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0597/4209/3363/files/jd_M1906NE-W_bl_480x526.jpg?v=1728358411',
      quantity: 346,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 1887,
    },
    {
      name: 'NewBalabubu',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0597/4209/3363/files/jd_M1906RWJ_bl_480x526.jpg?v=1726218061',
      quantity: 876,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 1997,
    },
    {
      name: 'NewJorDan',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0597/4209/3363/files/jd_FQ1281-601_al_large.jpg?v=1726197680',
      quantity: 565,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 1678,
    },
    {
      name: 'NewBalabubu',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0597/4209/3363/files/jd_M2002RPJ_bl_480x526.jpg?v=1728954221',
      quantity: 48,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 2099,
    },
    {
      name: 'NewBalabubu',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0597/4209/3363/files/jd_U740WN2_bl_480x526.jpg?v=1729161638',
      quantity: 99,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 1449,
    },
    {
      name: 'NewBalabubu',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0597/4209/3363/files/jd_MR530SX-W_bl_480x526.jpg?v=1730077517',
      quantity: 12,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 1439,
    },
    {
      name: 'NewBikey',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1bs4cMps3NP80VssZhsd2pnPbB8n3kBSWTN27DmXxmSRowybWpVHNlj63Qn9aGt-GqMbRizW4onRCK1losFJpG0Glg_wex1jsd80t8fl6GXq_dxvGdV5rtLOJC3ZANn6bVuCyVX5JgcM&usqp=CAc',
      quantity: 48,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 1459,
    },
    {
      name: 'NewAirJD',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2J6VtdrHF1QLuYuZ0fThRjc5Qvripza4vf_2OWfZUeXN6T35Tzamwhk5O_SU0RadfnAA&usqp=CAU',
      quantity: 99,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 1889,
    },
    {
      name: 'NewAirJD',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaER-VCJ2hEFgCLwAapSzCshsUe9b3yI8G8g&s',
      quantity: 12,
      about: 'อะ รองๆ รองเท้า',
      status: 'open',
      price: 1499,
    }],
    loaded: false
  }),
  actions: {
    loadProduct () {
      const productList = localStorage.getItem('product-data')
      if (productList) {
        this.list = JSON.parse(productList)
      }
      this.loaded = true
    },
    filterProducts (searchName) {
      if (!this.loaded) {
        this.loadProduct()
      }
      return this.list.filter(product => product.name.includes(searchName))
    }
  },

})