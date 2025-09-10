export interface Ward {
  id: string;
  name: string;
  cooperatives: Cooperative[];
}

export interface Cooperative {
  id: string;
  name: string;
  address: string;
  memberCount: number;
  executiveCommittee: {
    chairman: string;
    secretary: string;
    treasurer: string;
    publicRelationsOfficer?: string;
  };
  establishedYear: number;
  registrationNumber: string;
}

export interface LocalGovernment {
  id: string;
  name: string;
  wards: Ward[];
}

export interface State {
  id: string;
  name: string;
  localGovernments: LocalGovernment[];
}

// Sample data for Nigerian states, LGAs, wards and cooperatives
export const nigeriaStates: State[] = [
  {
    id: "katsina",
    name: "Katsina State",
    localGovernments: [
      {
        id: "funtua",
        name: "Funtua",
        wards: [
          {
            id: "funtua-central",
            name: "Funtua Central",
            cooperatives: [
              {
                id: "funtua-farmers-1",
                name: "Funtua Progressive Farmers Cooperative",
                address: "No. 15 Market Road, Funtua",
                memberCount: 245,
                executiveCommittee: {
                  chairman: "Malam Usman Ibrahim",
                  secretary: "Hajiya Fatima Sani",
                  treasurer: "Malam Mohammed Yusuf",
                  publicRelationsOfficer: "Amina Garba"
                },
                establishedYear: 2018,
                registrationNumber: "KT/COOP/2018/045"
              },
              {
                id: "funtua-farmers-2", 
                name: "United Grain Producers Cooperative",
                address: "Beside Primary School, Funtua",
                memberCount: 189,
                executiveCommittee: {
                  chairman: "Malam Suleiman Ahmad",
                  secretary: "Hauwa Mohammed",
                  treasurer: "Ibrahim Nasir"
                },
                establishedYear: 2020,
                registrationNumber: "KT/COOP/2020/078"
              }
            ]
          },
          {
            id: "funtua-north",
            name: "Funtua North",
            cooperatives: [
              {
                id: "funtua-north-1",
                name: "Northern Farmers Unity Cooperative",
                address: "Ungwar Alkali, Funtua",
                memberCount: 156,
                executiveCommittee: {
                  chairman: "Malam Garba Usman",
                  secretary: "Zainab Ibrahim",
                  treasurer: "Yusuf Sani"
                },
                establishedYear: 2019,
                registrationNumber: "KT/COOP/2019/067"
              }
            ]
          }
        ]
      },
      {
        id: "kaduna-north",
        name: "Kaduna North",
        wards: [
          {
            id: "kaduna-north-ward1",
            name: "Hayin Banki",
            cooperatives: [
              {
                id: "kaduna-north-1",
                name: "Hayin Banki Agricultural Cooperative",
                address: "Hayin Banki Market, Kaduna",
                memberCount: 198,
                executiveCommittee: {
                  chairman: "Malam Bello Kaduna",
                  secretary: "Hajiya Maryam Sule",
                  treasurer: "Alhaji Garba Danladi",
                  publicRelationsOfficer: "Fatima Aliyu"
                },
                establishedYear: 2019,
                registrationNumber: "KD/COOP/2019/134"
              }
            ]
          },
          {
            id: "kaduna-north-ward2", 
            name: "Unguwar Rimi",
            cooperatives: [
              {
                id: "kaduna-north-2",
                name: "Rimi Farmers Development Cooperative",
                address: "Unguwar Rimi, Kaduna North",
                memberCount: 167,
                executiveCommittee: {
                  chairman: "Malam Sani Rimi",
                  secretary: "Aisha Bello",
                  treasurer: "Ibrahim Mohammed"
                },
                establishedYear: 2020,
                registrationNumber: "KD/COOP/2020/156"
              }
            ]
          }
        ]
      },
      {
        id: "katsina-lga",
        name: "Katsina",
        wards: [
          {
            id: "katsina-central",
            name: "Katsina Central",
            cooperatives: [
              {
                id: "katsina-central-1",
                name: "Katsina Metropolitan Farmers Cooperative",
                address: "No. 23 Emir's Palace Road, Katsina",
                memberCount: 312,
                executiveCommittee: {
                  chairman: "Alhaji Shehu Musa",
                  secretary: "Halima Yusuf",
                  treasurer: "Malam Abdullahi Hassan",
                  publicRelationsOfficer: "Safiya Ahmad"
                },
                establishedYear: 2017,
                registrationNumber: "KT/COOP/2017/023"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "kaduna",
    name: "Kaduna State", 
    localGovernments: [
      {
        id: "zaria",
        name: "Zaria",
        wards: [
          {
            id: "zaria-city",
            name: "Zaria City",
            cooperatives: [
              {
                id: "zaria-1",
                name: "Zaria Commercial Farmers Cooperative",
                address: "Samaru Road, Zaria",
                memberCount: 278,
                executiveCommittee: {
                  chairman: "Prof. Ahmad Danfulani",
                  secretary: "Dr. Aisha Mohammed",
                  treasurer: "Malam Ibrahim Zakari"
                },
                establishedYear: 2016,
                registrationNumber: "KD/COOP/2016/089"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "kano",
    name: "Kano State",
    localGovernments: [
      {
        id: "kano-municipal",
        name: "Kano Municipal",
        wards: [
          {
            id: "fagge",
            name: "Fagge",
            cooperatives: [
              {
                id: "fagge-1",
                name: "Fagge Agricultural Development Cooperative",
                address: "Fagge Market Area, Kano",
                memberCount: 456,
                executiveCommittee: {
                  chairman: "Alhaji Musa Dantata",
                  secretary: "Hajiya Khadija Sani",
                  treasurer: "Malam Umar Farouk",
                  publicRelationsOfficer: "Amina Bello"
                },
                establishedYear: 2015,
                registrationNumber: "KN/COOP/2015/012"
              }
            ]
          }
        ]
      },
      {
        id: "nassarawa",
        name: "Nassarawa",
        wards: [
          {
            id: "nassarawa-ward1",
            name: "Nassarawa GRA",
            cooperatives: [
              {
                id: "nassarawa-1",
                name: "Nassarawa Modern Farmers Cooperative",
                address: "GRA Phase 2, Nassarawa, Kano",
                memberCount: 234,
                executiveCommittee: {
                  chairman: "Dr. Aminu Kano",
                  secretary: "Eng. Fatima Ibrahim",
                  treasurer: "Malam Yusuf Nassarawa",
                  publicRelationsOfficer: "Hajiya Zainab Musa"
                },
                establishedYear: 2018,
                registrationNumber: "KN/COOP/2018/087"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sokoto",
    name: "Sokoto State",
    localGovernments: [
      {
        id: "sokoto-north",
        name: "Sokoto North",
        wards: [
          {
            id: "sokoto-central",
            name: "Sokoto Central",
            cooperatives: [
              {
                id: "sokoto-1",
                name: "Sokoto Caliphate Farmers Cooperative",
                address: "Sultan Bello Road, Sokoto",
                memberCount: 389,
                executiveCommittee: {
                  chairman: "Alhaji Aliyu Sokoto",
                  secretary: "Hajiya Aisha Usman",
                  treasurer: "Malam Bello Kebbi",
                  publicRelationsOfficer: "Fatima Sokoto"
                },
                establishedYear: 2017,
                registrationNumber: "SK/COOP/2017/045"
              }
            ]
          }
        ]
      },
      {
        id: "wamako",
        name: "Wamako",
        wards: [
          {
            id: "wamako-ward1",
            name: "Wamako Town",
            cooperatives: [
              {
                id: "wamako-1",
                name: "Wamako Rice Farmers Cooperative",
                address: "Wamako Market, Sokoto",
                memberCount: 267,
                executiveCommittee: {
                  chairman: "Malam Ibrahim Wamako",
                  secretary: "Hajiya Khadija Aliyu",
                  treasurer: "Alhaji Musa Kebbi"
                },
                establishedYear: 2019,
                registrationNumber: "SK/COOP/2019/078"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "kebbi",
    name: "Kebbi State",
    localGovernments: [
      {
        id: "birnin-kebbi",
        name: "Birnin Kebbi",
        wards: [
          {
            id: "birnin-kebbi-central",
            name: "Birnin Kebbi Central",
            cooperatives: [
              {
                id: "birnin-kebbi-1",
                name: "Kebbi State Rice Producers Cooperative",
                address: "Emir's Palace Road, Birnin Kebbi",
                memberCount: 445,
                executiveCommittee: {
                  chairman: "Alhaji Abubakar Kebbi",
                  secretary: "Hajiya Hauwa Birnin",
                  treasurer: "Malam Sani Argungu",
                  publicRelationsOfficer: "Amina Kebbi"
                },
                establishedYear: 2016,
                registrationNumber: "KB/COOP/2016/023"
              }
            ]
          }
        ]
      }
    ]
  }
];