export interface Blog {
	id: number;
	title: string;
	text: string;
	author: {
		id: number;
		name: string;
	};
	views: number;
	category: string;
	tags: string;
}

export let blogs = [
	{
		id: 1,
		title: "blog 1",
		description: "description 1",
		imageURL: "",
		author: {
			id: 1,
			name: "name name",
		},
		views: 0
	},
	{
		id: 2,
		title: "blog 2",
		description: "description 2",
		imageURL: "",
		author: {
			id: 1,
			name: "name name",
		},
		views: 0
	},
	{
		id: 3,
		title: "blog 3",
		description: "description 3",
		imageURL: "",
		author: {
			id: 1,
			name: "name name",
		},
		views: 0
	},
	{
		id: 4,
		title: "blog 4",
		description: "description 4",
		imageURL: "",
		author: {
			id: 1,
			name: "name name",
		},
		views: 0
	},
	{
		id: 5,
		title: "blog 5",
		description: "description 5",
		imageURL: "",
		author: {
			id: 1,
			name: "name name",
		},
		views: 0
	},
]