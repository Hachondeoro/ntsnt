const SiteClient = require("datocms-client").SiteClient;
const client = new SiteClient("63d389d8e59414c427dc34d53958d0");

// #region Team
var Team = [
  {
		name: 'Ali Dhirani',
		email: 'ali@kindness-shake.com.au',
		role: 'Strategy, Governance and Administration',
		image: './public/static/img/ali.jpg',
		description:
			"Ali is from Tanzania and has recently graduated from Charles Darwin University with a Bachelor of Accounting. During his studies, Ali was very engaged in the students' and wider community, as a Peer Assisted Study Session leader, a tutor for the Indigenous Tutorial Assistance Support, representative of the Undergraduate student cohort at the Academic Board of Charles Darwin University and selected as the student representative in the Appeals Committee. Additionally, Ali was appointed a StudyNT Student Ambassador, Executive Assistance to the National Secretory of the Council of International Students Australia as well as the secretary for the Charles Darwin University Students’ Association.   Since graduating, Ali has called the Northern Territory his home and after working as an External and Internal Auditor he now runs his own business. "
	},
	{
		name: 'Zitan “Sunny” Liu',
		email: 'sunny@kindness-shake.com.au',
		role: 'Marketing, Communications and Media',
		image: './public/static/img/sunny.jpg',
		description:
			"Sunny is from China and has been in Australia for six years, having moved from Melbourne to Darwin in 2019. She is studying a Master of Teaching (Secondary) at Charles Darwin University and holds a Bachelor of Arts majoring in Journalism and Psychology from Monash University. She worked as a journalist and media professional in Melbourne for 2 years. She has been with the Kindness Shake since the very beginning. She says the welcoming and multicultural community in Darwin is what she loves the most about living here. Of course, also the world-famous sunset and unique sceneries! You might have seen Sunny from the StudyNT Student Ambassador, where she is dedicated to promoting the Territory as a study destination for international students. She is also the Public Relations Officer at the Charles Darwin University Students' Council. "
	},
	{
		name: 'Jimena Espitia',
		email: 'jimena@kindness-shake.com.au',
		role: 'Marketing, Communications and Media',
		image: './public/static/img/jimena.jpg',
		description:
			"Proud Latina and Colombian. Jimena defines herself as a charismatic, kind, independent and positively ambitious person. One of her goals is to leave a legacy of social and human conscience about being a human being, and she is getting it through helping the International students community. Jimena's professional background is Marketing and Advertising with a postgraduate degree in Market Research and Consumer Behaviour. Her latest experience got her busy over five years in Marketing and Market Research in the Events, Conventions and Trade Fairs industry in Colombia. She has volunteered for different social and religious organisations in Colombia such as TOVPrayer Life Workshops, Union Lumen Dei, Missionary Congregation of Santa Teresita del Niño Jesús, etc. These have helped her to develop her human sensibility and social conscience "
	},
	{
		name: 'Manfred Mletsin',
		email: 'manfred@kindness-shake.com.au',
		role: 'Marketing, Communications and Media',
		image: './public/static/img/manfred.jpg',
		description:
			'Coming from Estonia and currently finishing his Bachelor of Accounting degree at Charles Darwin University, Manfred also holds qualifications in Business Management.  Manfred has a passion for education and has been dynamically involved with the international education community for the past five years. He has become a representative voice and advocate for the education, health and wellbeing of international students connecting with the decision-makers in Canberra.  Appointed as the StudyNT Student Ambassador for three consecutive years and held offices as the VET/TAFE and Undergraduate Officer with the Council of International Students Australia, he was the Public Relations Officer with CISA which gave him opportunities to collaborate with Technical and Further Education (TAFE) Directors Australia, Independent Tertiary Education Council Australia (ITECA) and the Department of Home Affairs and the Department of Education and Training. Manfred has expertise in branding and business set-up and daily management and runs his own small business. Manfred calls the Northern Territory his second home.  '
	},
	{
		name: 'Ana Nuñez',
		email: 'ana@kindness-shake.com.au',
		role: 'Volunteer Management',
		image: './public/static/img/ana.jpg',
		description:
			'Ana is coming is from Argentina and has been in Australia since 2012. With a background in Political Science, she studied Education at Charles Darwin University and since graduating, she has been teaching and connecting with dozens of students from all around the world. Ana is currently working at STEPS AMEP and Training where she teaches foundation English language and settlement skills to migrants and refugees.  She loves her job because her true passion is to connect with people, especially international students, and migrants, inspire them and provide them with a supportive and enabling environment to reach their full potential. She truly believes education is the key for change.  Ana also works as a Spanish interpreter for the Northern Territory Government and the Australian Department of Home Affairs and has recently started her own translation business. '
	},
	{
		name: 'Tatenda Mapuranga',
		email: 'tatenda@kindness-shake.com.au',
		role: 'Volunteer Management',
		image: './public/static/img/tate.jpg',
		description:
			"Tatenda is from Zimbabwe and has recently graduated from Charles Darwin University with a bachelor’s degree in Business. During his studies Tatenda was inspired by his friends to take an initiative in advocating for students. He volunteered for the Council of International Students Australia (CISA) as the Human Resources Manager. He then went on to work with the Charles Darwin University Students' Association where he volunteered in helping with student lead events and lastly was also part of the CDU Student Ambassadors.  “Tate”, as we like to call him, works now for CDU Global as International Student Support and Enquiries Officer at Charles Darwin University. "
	},
	{
		name: 'Thach “Kylie” Thao Tran',
		email: 'kylie@kindness-shake.com.au',
		role: 'Event Management and Logistics',
		image: './public/static/img/kylie.jpg',
		description:
			'Kylie is coming from Vietnam and currently studying Bachelor of Accounting at CDU. Being away from home to study abroad is not an easy experience for most people including Kylie. It was her first semester beginning of 2020 and she had been more stressed when COVID-19 occurred. However, she believes that we’ll find the positives in negative things. It has to be accepted that there are fewer opportunities to get a job and she used this time for volunteering and now she has proudly become a part of the kindness team The Kindness Shake, where she has found great friends and have good connections. You will also probably meet her as a volunteer two days per week at RSPCA, where she cares for friendly dogs seeking adoption. It is an ideal way for her to treat herself, be joyful with them and stop missing her little dogs at home. She is a dog lover, also interested in yoga, avid cook and keen on photography. She is a firm a believer in “nothing changes if nothing changes” and she hopes to inspire people she meets to appreciate same. '
	},
	{
		name: 'Nilesh Dilushan',
		email: 'nilesh@kindness-shake.com.au',
		role: 'Partnerships, Community Engagement and Fundraising',
		image: './public/static/img/nilesh.jpg',
		description:
			'Nilesh is incredibly passionate about bringing students from different cultures together and help them transform their lives through various community support and student engagement. The journey as a higher education student has been incredible for Nilesh with representing CDU and other establishments in several student leadership roles. He has worked with CDU Equity Services to promote mental health awareness campaign for students facing uncertainties by the pandemic and also recently launched Be Local & Buy Local to promote exclusive student discounts and connect local businesses with the student community. Nilesh’s journey is an excellent example of how volunteering can be a decisive step in someone’s development journey.'
	},

	{
		name: 'Denis Mitrov',
		email: 'denis@kindness-shake.com.au',
		role: 'Partnerships, Community Engagement and Fundraising',
		image: './public/static/img/denis.jpg',
		description:
			"Denis Mitrov is a SwissCroatian dual citizen, and this is not only seen in his passports but also in the values he represents, a little bit from both cultures. A current international student at the Alana Kaye College studying Diploma of Community Services. His life has been very evenly structured up to a point where he thought he has to leave his comfort zone and environment for a while to grow as a human and to get new impressions of the world, so the decision was made to come to Darwin. In a time when Denis also needed support, he decided that he's still doing well compared to others and Connecting Experiences plus a Podcast were born. A few weeks later he also joined the KindnessShake team to achieve great things as you can see in the last months and weeks. Denis is a human being who tries to treat others as good as he wants to be treated, who believes in there is good in the world and someone who likes to have long and intense discussions. "
	}
]


async function createRecord(name, email, role, image, description) {
  const path = await client.createUploadPath(image);
  const upload = await client.uploads.create({ path });
  const record = await client.items.create({
    itemType: "686535", // model ID
    name:name,
    email:email,
    role:role,
    image: {
      uploadId: upload.id,
    },
    description:description,
  });
  console.log(record);
}
Team.map((item) => {
  createRecord(item.name, item.email, item.role, item.image, item.description);
});

// #endregion



// node --experimental-modules  .\components\DatoCMS\test.js
// node .editor > Paste and enter

var PortfolioData = [
  {
    title: "Be Local Buy Local",
    image:"./assets/images/cdubsa/projects/belocalbuylocal2.jpg",
    url: "#",
  },
  {
    title: "CPA Networking Event",
    image:"./assets/images/cdubsa/projects/cpa networking event 4.jpg",
    url: "#",
  },
  {
    title: "CPA Networking Event",
    image:"./assets/images/cdubsa/projects/free tax clinic.jpg",
    url: "#",
  },
  {
    title: "Orientation Day",
    image:"./assets/images/cdubsa/projects/orientation day 2.jpg",
    url: "#",
  },
  {
    title: "Women's day",
    image:"./assets/images/cdubsa/projects/womensday.jpg",
    url: "#",
  },
];

async function createRecord(title, image) {
  const path = await client.createUploadPath(image);
  const upload = await client.uploads.create({ path });
  const record = await client.items.create({
    itemType: "667499", // model ID
    title: title,
    image: {
      uploadId: upload.id,
    },
  });
  console.log(record);
}
PortfolioData.map((item) => {
  createRecord(item.title, item.image);
});




// // Create records
// client.items.create({
//   itemType: "661078", // model ID
//   title: "Edin Tom",
//   description: "Vice President",
//   image: {
//     uploadId: "12333298",
//   },
// });

// // Upload image
// async function createUpload(file) {
//   const path = await client.createUploadPath(file);

//   const upload = await client.uploads.create({
//     path,
//     author: "New author!",
//   });
//   console.log(upload);
// }
// createUpload("./assets/images/cdubsa/cdu_transparent.png");
