import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Hay Essalam El Jadida',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'zakaryaoussalem@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '0608766503',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full container mx-auto ">
			<div className="text-left px-6">
				<h2 className="font-general-medium text-center text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular" style={{
					display: "flex",
					gap: "1.5rem",
					justifyContent: "center",
				}}>
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
