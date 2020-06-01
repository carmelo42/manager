const managerRoot = {
  EU: 'https://www.ovh.com/manager',
  CA: 'https://ca.ovh.com/manager',
  US: 'https://us.ovhcloud.com/manager',
};

const guidesRoot = 'https://docs.ovh.com';
const helpRoot = 'https://help.ovhcloud.com';

const universes = {
  dedicated: 'dedicated',
};

const URI = {
  autorenew: '#/billing/autorenew',
  billing: '#/billing/history',
  catalog: '#/catalog',
  contactManagement:
    '#/contacts/services?serviceName=:serviceName&category=:category',
  contacts: '#/contacts/services',
  debtPay: '#/billing/history/debt/all/pay',
  domain: '#/configuration/domain/:domain',
  order: '#/billing/order/:orderId',
  orders: '#/billing/orders',
  paymentMethod: '#/billing/payment/method',
  services: '#/billing/autoRenew',
  support: '#/ticket',
  newSupportTicket: '#/support/tickets/new',
  supportLevel: '#/useraccount/support/level',
  ticket: '#/support/tickets/:ticketId',
  userAccount: '#/useraccount/dashboard',
  userEmails: '#/useraccount/emails',
};

export default {
  EU: {
    autorenew: `${managerRoot.EU}/${universes.dedicated}/${URI.autorenew}`,
    billing: `${managerRoot.EU}/${universes.dedicated}/${URI.billing}`,
    catalog: `${managerRoot.EU}/${URI.catalog}`,
    contactManagement: `${managerRoot.EU}/${universes.dedicated}/${URI.contactManagement}`,
    contacts: `${managerRoot.EU}/${universes.dedicated}/${URI.contacts}`,
    debtPay: `${managerRoot.EU}/${universes.dedicated}/${URI.debtPay}`,
    guides: {
      home: {
        CZ: `${guidesRoot}/cz/cs/`,
        DE: `${guidesRoot}/de/`,
        ES: `${guidesRoot}/es/`,
        FI: `${guidesRoot}/fi/`,
        FR: `${guidesRoot}/fr/`,
        GB: `${guidesRoot}/gb/en/`,
        IE: `${guidesRoot}/ie/en/`,
        IT: `${guidesRoot}/it/`,
        LT: `${guidesRoot}/lt/`,
        MA: `${guidesRoot}/gb/en/`,
        NL: `${guidesRoot}/nl/`,
        PL: `${guidesRoot}/pl/`,
        PT: `${guidesRoot}/pt/`,
        SN: `${guidesRoot}/gb/en/`,
        TN: `${guidesRoot}/gb/en/`,
      },
    },
    help: {
      DE: `${helpRoot}/de`,
      ES: `${helpRoot}/es-es`,
      FR: `${helpRoot}/fr`,
      GB: `${helpRoot}/en-gb`,
      IE: `${helpRoot}/en-ie`,
      IT: `${helpRoot}/it`,
      MA: `${helpRoot}/fr-ma`,
      NL: `${helpRoot}/nl`,
      PL: `${helpRoot}/pl`,
      PT: `${helpRoot}/pt`,
      SN: `${helpRoot}/fr-sn`,
      TN: `${helpRoot}/fr-tn`,
    },
    order: `${managerRoot.EU}/${universes.dedicated}/${URI.order}`,
    orders: `${managerRoot.EU}/${universes.dedicated}/${URI.orders}`,
    paymentMethod: `${managerRoot.EU}/${universes.dedicated}/${URI.paymentMethod}`,
    services: `${managerRoot.EU}/${universes.dedicated}/${URI.services}`,
    support: `${managerRoot.EU}/${universes.dedicated}/${URI.support}`,
    newSupportTicket: `${managerRoot.EU}/${universes.dedicated}/${URI.newSupportTicket}`,
    supportLevel: `${managerRoot.EU}/${universes.dedicated}/${URI.supportLevel}`,
    tasks: 'http://travaux.ovh.net/',
    ticket: `${managerRoot.EU}/${universes.dedicated}/${URI.ticket}`,
    userAccount: `${managerRoot.EU}/${universes.dedicated}/${URI.userAccount}`,
    userEmails: `${managerRoot.EU}/${universes.dedicated}/${URI.userEmails}`,
  },
  CA: {
    autorenew: `${managerRoot.CA}/${universes.dedicated}/${URI.autorenew}`,
    billing: `${managerRoot.CA}/${universes.dedicated}/${URI.billing}`,
    catalog: `${managerRoot.CA}/${URI.catalog}`,
    contactManagement: '',
    contacts: '',
    debtPay: `${managerRoot.CA}/${universes.dedicated}/${URI.debtPay}`,
    guides: {
      home: {
        ASIA: `${guidesRoot}/ca/en/`,
        AU: `${guidesRoot}/ca/en/`,
        CA: `${guidesRoot}/ca/en/`,
        QC: `${guidesRoot}/ca/fr/`,
        SG: `${guidesRoot}/ca/en/`,
        WE: `${guidesRoot}/ca/en/`,
        WS: `${guidesRoot}/ca/en/`,
      },
    },
    help: {
      ASIA: `${helpRoot}/asia`,
      AU: `${helpRoot}/en-au`,
      CA: `${helpRoot}/en-ca`,
      QC: `${helpRoot}/fr-ca`,
      SG: `${helpRoot}/en-sg`,
      WE: `${helpRoot}/en`,
      WS: `${helpRoot}/es`,
    },
    order: `${managerRoot.CA}/${universes.dedicated}/${URI.order}`,
    orders: `${managerRoot.CA}/${universes.dedicated}/${URI.orders}`,
    paymentMethod: `${managerRoot.CA}/${universes.dedicated}/${URI.paymentMethod}`,
    services: `${managerRoot.CA}/${universes.dedicated}/${URI.services}`,
    support: `${managerRoot.CA}/${universes.dedicated}/${URI.support}`,
    newSupportTicket: `${managerRoot.CA}/${universes.dedicated}/${URI.newSupportTicket}`,
    supportLevel: `${managerRoot.CA}/${universes.dedicated}/${URI.supportLevel}`,
    tasks: 'http://travaux.ovh.net/',
    ticket: `${managerRoot.CA}/${universes.dedicated}/${URI.ticket}`,
    userAccount: `${managerRoot.CA}/${universes.dedicated}/${URI.userAccount}`,
    userEmails: `${managerRoot.CA}/${universes.dedicated}/${URI.userEmails}`,
  },
  US: {
    billing: `${managerRoot.US}/${universes.dedicated}/${URI.billing}`,
    billingEnterprise: 'https://billing.us.ovhcloud.com/login',
    catalog: `${managerRoot.US}/${URI.catalog}`,
    contactManagement: '',
    contacts: '',
    debtPay: `${managerRoot.US}/${universes.dedicated}/${URI.debtPay}`,
    domain: '',
    guides: {
      home: {
        US: 'https://support.us.ovhcloud.com',
      },
    },
    help: {
      US: 'https://us.ovhcloud.com/support',
    },
    order: `${managerRoot.US}/${universes.dedicated}/${URI.order}`,
    orders: `${managerRoot.US}/${universes.dedicated}/${URI.orders}`,
    paymentMethod: `${managerRoot.US}/${universes.dedicated}/${URI.paymentMethod}`,
    services: '',
    support: `${managerRoot.US}/${universes.dedicated}/${URI.support}`,
    newSupportTicket: `${managerRoot.US}/${universes.dedicated}/${URI.newSupportTicket}`,
    supportLevel: '',
    tasks: '',
    ticket: `${managerRoot.US}/${universes.dedicated}/${URI.ticket}`,
    userAccount: `${managerRoot.US}/${universes.dedicated}/${URI.userAccount}`,
    userEmails: '',
  },
};
