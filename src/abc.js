// 1) POST API for creating new application
// 2) GET API to fetch particular application data 
// 3)PATCH API to update particular application data
// {
// 	"id":"",
// 	"createdDate":"",
// 	"status":""
//   "personalDetails": {
//     "name": "Keshav",
//     "fatherName": "Sumit",
//     "address1": "Boriwali",
//     "address2": null,
//     "city": "Mumbai",
//     "state": "Maharashtra",
//     "pincode": "857645",
//     "nativeTown": null,
//     "mobileNumber": "9876432156",
//     "phoneNumber": null,
//     "creed": null,
//     "category": "Medical",
//     "jain": "false"
//   },
//   "updateDocuments": {
//     "aadhaarNumber": "92829283638382",
//     "rationCard": "37337382829",
//     "bankAccount": "99982763683",
//     "rent": null,
//     "electricity": null,
//     "insurer": null,
//     "salary": null,
//     "jain": null,
//     "telephone": null,
//     "referral": null,
//     "school": null
//   },
//   "miscellaneousQuestions": {
//     "pathshala": "true",
//     "religiousEducation": "true",
//     "templePooja": "false",
//     "upashraya": "false",
//     "usageKanmool": "true",
//     "usageKanmoolStopped": null
//   },
//   "monthlyExpenses": {
//     "maintainance": "2000",
//     "electric": "500",
//     "medical": "1000",
//     "groceries": "3000",
//     "telephone": "200",
//     "education": "800",
//     "tution": "300",
//     "others": "2000",
//     "flatArea": "50",
//     "home": "Rented"
//   },
//   "homeFurniture": {
//     "tv": "1",
//     "cable": "1",
//     "fridge": "1",
//     "washingMachine": "1",
//     "vehicles": "1",
//     "bikes": "1",
//     "phones": "1"
//   },
//   "dependentDetails": {
//     "dependentList": [
//       {
//         "sNo": 1,
//         "name": "Sumit",
//         "Age": null,
//         "aadhaarNo": "88765676577",
//         "education": "abc",
//         "profession": "salaried",
//         "income": "9000",
//         "religiousEducation": "-",
//         "kanmool": null,
//         "navkarshi": null,
//         "pooja": null,
//         "nightDinner": null,
//         "age": "44"
//       },
//       ......
//     ],
//     "education": "abc",
//     "experience": "xyz",
//     "previousLoan": "true",
//     "previousLoanAmount": "10000"
//   },
//   "medicalGrant": {
//   "patientName":"",
//     "hospitalName": "abc",
//     "hospitalAddress": "mumbai",
//     "diseaseDetails": "xyz",
//     "approxExpenses": "7000",
//     "amountNeeded": "5000",
//     "amountContributed": null,
//     "anyExisting": null,
//     "medicalInsuranceDetails": null,
//     "medicalInsuranceAmount": "4000"
//   },
//   "earningMembersDetails": {
//     "earningMembersList": [
//       {
//         "sNo": 1,
//         "name": "Sumit",
//         "work": "abc",
//         "phoneNumber": "7886765688"
//       },
//       .......
//     ]
//   },
//   "skillDetails": {
//     "skillDetailsList": [
//       {
//         "sNo": 1,
//         "name": "nlksn",
//         "work": "nknn",
//         "education": "kujg",
//         "phoneNumber": "98686899797"
//       },
//       ......
//     ]
//   },
//   "administrativeDetails": {
//     "referredBy": "Dikshant",
//     "address": "India"
//   },
// }

// 2) GET API to fetch table data
// {
// 	[
// 		id:"",
// 		name:"",
// 		mobileNumber:"",
// 		aadhaarNumber: "",
// 		rationCard: "",
// 		status:"",
// 	],
//     ....
// }

// 4) GET API to fetch survey details
// 5) PATCH API for updating survey details
// {
// 	id:"",
// 	surveyDoneBy: "",
//     surveyDetails: "",
//     specialNotes: "",
//     surveyDate: "",
// }

// 6) GET API to fetch approval details along with same ration card and aadhaar number history
// {
//     id:"",
//     name:"",
//     status:"",
//     category:"",
//     rationCard:"",
//     surveyDate:"",
//     createdDate:"",
//     approvalDetails: {
//         approvedBy:"",
//         amountNeeded:"",
//         amountApproved:"",
//         comments:"",
//         approvalDate:"",
//     },
//     bankDetails: {
//         bankName:"",
//         bankAccountNumber:"",
//         amountApproved:"",
//         chequeNeftNumber:"",
//         grantAmount:"",
//         grantDate:"",
//     }
// }

// 7) PATCH API to update Approval Details
// {
//     id:"",
//     approvalDetails: {
//         approvedBy:"",
//         amountNeeded:"",
//         amountApproved:"",
//         comments:"",
//         approvalDate:"",
//     },
// }

// 8) PATCH API to update Bank Details
// {
//     id:"",
//     bankDetails: {
//         bankName:"",
//         bankAccountNumber:"",
//         amountApproved:"",
//         chequeNeftNumber:"",
//         grantAmount:"",
//         grantDate:"",
//     }
// }