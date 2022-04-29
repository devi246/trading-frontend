let invoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];
  
export function getInvoices() {
  return invoices;
}


export function getInvoice(number) {
  return invoices.find(
    (invoice) => invoice.number === number
  );
}



let users = [
  {
    name: "John",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Jim",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Mia",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Kim",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Dan",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

export function getUsers() {
  return users;
}

export function getUser(name) {
  return users.find(
    (user) => user.name === name
  );
}


let offerings = [
  {
    name: "Offer1",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Offer2",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "daffer",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "gaffer",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Offer5",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

export function getOffers(x) {
  if (isNaN(x) == false) { // is a number
    return offerings.slice(0,x)
  }
  return offerings;
}

export function getOffering(number) {
  return offerings.find(
    (offering) => offering.number === number
  );
}

