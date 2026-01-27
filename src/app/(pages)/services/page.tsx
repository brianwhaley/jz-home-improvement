"use client";

import { Callout, PageTitleHeader, PageSection } from "@pixelated-tech/components";

export default function ServicesPage() {
    
	return (
		<>

			<PageTitleHeader title="JZ Home Improvement Services" />

			<PageSection columns={1} maxWidth="1024px" padding="20px" id="service-section">
				<Callout
					variant="boxed grid"
					gridColumns={{left:1, right:3}}
					layout="horizontal"
					direction="left"
					img="/images/placeholder.png"
					title="Kitchens"
					content="If you're looking to upgrade your kitchen, we offer a range of services 
					including custom cabinetry, countertop installation, flooring, and lighting solutions.
					Our team of experienced professionals will work with you to create a functional 
					and stylish kitchen that meets your needs and exceeds your expectations. 
					We use high-quality materials and the latest techniques to ensure a beautiful 
					and durable finish."
				/>
				<Callout
					variant="boxed grid"
					gridColumns={{left:3, right:1}}
					layout="horizontal"
					direction="right"
					img="/images/10jadebathroom4/img_0738.webp"
					title="Bathrooms"
					content="A bathroom remodel can transform your space into a relaxing oasis.
					We specialize in custom tile work, shower and tub installation, vanity 
					replacement, and lighting upgrades. Our team will help you design a
					bathroom that is both functional, peaceful, and beautiful, using high-quality materials 
					and expert craftsmanship to ensure a lasting finish."
				/>
				<Callout
					variant="boxed grid"
					gridColumns={{left:1, right:3}}
					layout="horizontal"
					direction="left"
					img="/images/placeholder.png"
					title="Basements"
					content="Transform your basement into a functional living space with our remodeling services.
					Whether you're looking to create a home theater, game room, or additional bedroom,
					our team of experts will work with you to design and build a space that meets your needs.
					We handle everything from framing and drywall to flooring and lighting, ensuring a 
					high-quality finish that you'll love."
				/>
				<Callout
					variant="boxed grid"
					gridColumns={{left:3, right:1}}
					layout="horizontal"
					direction="right"
					img="/images/10jadedeck/img_2656.webp"
					title="Decks"
					content="Enhance your outdoor living space with a custom deck built by our experienced team.
					We offer a variety of materials and styles to choose from, including wood, composite,
					and vinyl decking. Our team will work with you to design a deck that fits your lifestyle
					and complements your home's architecture. From start to finish, we handle all aspects 
					of the project to ensure a beautiful and durable result."
				/>
			</PageSection>

		</>
	);
}
