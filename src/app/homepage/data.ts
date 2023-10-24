export let vesselData = [
  {
    name: 'Vessel 1',
    projects: [
      {
        fields: [{
          title: 'Project Number',
          value: '123'
        }, {
          title: 'Customer Name',
          value: 'Ali Yılmaz'
        }, {
          title: 'Department',
          value: 'Finance'
        }, {
          title: 'City',
          value: 'Izmir'
        }, {
          title: 'ETA',
          value: '5th October'
        }, {
          title: 'Payment Type',
          value: 'Cash'
        }, {
          title: 'Payment Term',
          value: 'Upfront'
        }, {
          title: 'Currency',
          value: 'TRY'
        }, {
          title: 'Created By',
          value: 'Ali Yılmaz'
        }],
        stage: 5,
        requisitions: [
          {
            name: 'Requisition 1-1-1',
            items: [
              {
                itemCode: 'ABC',
                description: 'plastic',
                unit: 'meter',
                quantity: 77,
                price: 20,
                remark: 'special material',
                cost: '10 USD',
                selectedSupplier: 'Ahmet',
                supplierRemark: 'supplier remark'
              },
              {
                itemCode: 'DEF',
                description: 'clay',
                unit: 'kg',
                quantity: 24,
                price: 20,
                remark: 'special price',
                cost: '13 TRY',
                selectedSupplier: 'Mehmet',
                supplierRemark: 'quality material'
              },
              {
                itemCode: 'BCD',
                description: 'silver',
                unit: 'kg',
                quantity: 24,
                price: 20,
                remark: '',
                cost: '13 TRY',
                selectedSupplier: 'Ahmet',
                supplierRemark: ''
              },
              {
                itemCode: 'ABC1',
                description: 'plastic',
                unit: 'meter',
                quantity: 77,
                price: 20,
                remark: 'special material',
                cost: '10 USD',
                selectedSupplier: 'Ahmet',
                supplierRemark: 'supplier remark'
              },
              {
                itemCode: 'DEF1',
                description: 'clay',
                unit: 'kg',
                quantity: 24,
                price: 20,
                remark: 'special price',
                cost: '13 TRY',
                selectedSupplier: 'Mehmet',
                supplierRemark: 'quality material'
              },
              {
                itemCode: 'BCD1',
                description: 'silver',
                unit: 'kg',
                quantity: 24,
                price: 20,
                remark: '',
                cost: '13 TRY',
                selectedSupplier: 'Ahmet',
                supplierRemark: ''
              },
              {
                itemCode: 'ABC2',
                description: 'plastic',
                unit: 'meter',
                quantity: 77,
                price: 20,
                remark: 'special material',
                cost: '10 USD',
                selectedSupplier: 'Ahmet',
                supplierRemark: 'supplier remark'
              },
              {
                itemCode: 'DEF2',
                description: 'clay',
                unit: 'kg',
                quantity: 24,
                price: 20,
                remark: 'special price',
                cost: '13 TRY',
                selectedSupplier: 'Mehmet',
                supplierRemark: 'quality material'
              },
              {
                itemCode: 'BCD2',
                description: 'silver',
                unit: 'kg',
                quantity: 24,
                price: 20,
                remark: '',
                cost: '13 TRY',
                selectedSupplier: 'Ahmet',
                supplierRemark: ''
              },
            ]
          },
          {
            name: 'Requisition 1-1-2',
            items: [{
              itemCode: 'ABC',
              description: 'plastic',
              unit: 'meter',
              quantity: 12,
              price: 20,
              remark: '',
              cost: '12 EUR',
              selectedSupplier: 'Mehmet',
              supplierRemark: 'excellent choice!'
            }]
          }
        ],
        name: 'Project 1-1',
      },
      {
        fields: [{
          title: 'Project Number',
          value: '1234'
        }, {
          title: 'Customer Name',
          value: 'Veli Yılmaz'
        }, {
          title: 'Department',
          value: 'Engineering'
        }, {
          title: 'City',
          value: 'Antalya'
        }, {
          title: 'ETA',
          value: '17th October'
        }, {
          title: 'Payment Type',
          value: 'Credit Card'
        }, {
          title: 'Payment Term',
          value: 'Upfront'
        }, {
          title: 'Currency',
          value: 'USD'
        }, {
          title: 'Created By',
          value: 'Selim'
        }],
        stage: 3,
        requisitions: [
          {
            name: 'Requisition 1-2-1',
            items: [{
              itemCode: 'RTY',
              description: 'rubber',
              unit: 'meter',
              quantity: 45,
              price: 20,
              remark: 'thanks',
              cost: '80TRY',
              selectedSupplier: 'Veli',
              supplierRemark: 'quality'
            }]
          },
          {
            name: 'Requisition 1-2-2',
            items: [{
              itemCode: 'OPW',
              description: 'wood',
              unit: 'kg',
              quantity: 97,
              price: 20,
              remark: 'thanks',
              cost: '45Usd',
              selectedSupplier: 'Bekir',
              supplierRemark: 'great choice!'
            }]
          }
        ],
        name: 'Project 1-2',
      },
    ]
  },
  {
    name: 'Vessel 2',
    projects: [
      {
        fields: [{
          title: 'Project Number',
          value: '12345'
        }, {
          title: 'Customer Name',
          value: 'Yılmaz'
        }, {
          title: 'Department',
          value: 'Accounting'
        }, {
          title: 'City',
          value: 'Istanbul'
        }, {
          title: 'ETA',
          value: '20th October'
        }, {
          title: 'Payment Type',
          value: 'Cash'
        }, {
          title: 'Payment Term',
          value: 'Upfront'
        }, {
          title: 'Currency',
          value: 'EUR'
        }, {
          title: 'Created By',
          value: 'Melih'
        }],
        stage: 2,
        requisitions: [
          {
            name: 'Requisition 2-1-1',
            items: [{
              itemCode: 'OPW',
              description: 'wood',
              unit: 'kg',
              quantity: 75,
              price: 30,
              remark: '',
              cost: '34 TRY',
              selectedSupplier: 'Kerim',
              supplierRemark: ''
            }]
          },
          {
            name: 'Requisition 2-1-2',
            items: [{
              itemCode: 'THN',
              description: 'iron',
              unit: 'kg',
              quantity: 354,
              price: 30,
              remark: '',
              cost: '34 TRY',
              selectedSupplier: 'Selim',
              supplierRemark: ''
            }]
          }
        ],
        name: 'Project 2-1',
      },
      {
        fields: [{
          title: 'Project Number',
          value: '123456'
        }, {
          title: 'Customer Name',
          value: 'Osman'
        }, {
          title: 'Department',
          value: 'Human Resources'
        }, {
          title: 'City',
          value: 'Mersin'
        }, {
          title: 'ETA',
          value: '9th October'
        }, {
          title: 'Payment Type',
          value: 'Credit Card'
        }, {
          title: 'Payment Term',
          value: 'Upfront'
        }, {
          title: 'Currency',
          value: 'TRY'
        }, {
          title: 'Created By',
          value: 'Batu'
        }],
        stage: 1,
        requisitions: [
          {
            name: 'Requisition 2-2-1',
            items: [{
              itemCode: 'THN',
              description: 'iron',
              unit: 'meter',
              quantity: 23,
              price: 30,
              remark: 'bad',
              cost: '100 EUR',
              selectedSupplier: 'Naim',
              supplierRemark: ''
            }]
          },
          {
            name: 'Requisition 2-2-2',
            items: [{
              itemCode: 'GOL',
              description: 'gold',
              unit: 'kg',
              quantity: 19,
              price: 30,
              remark: 'thanks',
              cost: '10 USD',
              selectedSupplier: 'Ali',
              supplierRemark: ''
            }]
          }
        ],
        name: 'Project 2-2',
      },
    ]
  }]
