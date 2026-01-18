"use client";

import { PageTitleHeader, PageSection, PageSectionHeader } from "@pixelated-tech/components";
import { Tiles } from "@pixelated-tech/components";

export default function ProjectsPage() {

	const TenJadeLaundry = [
		{
			index: 0, cardIndex: 0, cardLength: 8,
			image: "/images/projects/10jadelaundry/2023-11-08-23.03.52.jpg",
			imageAlt: "10 Jade Bathroom 4 - Before - Corner Jacuzzi Tub with brown marble surround",
		},
		{
			index: 1, cardIndex: 1, cardLength: 8,
			image: "/images/projects/10jadelaundry/2023-11-10-15.08.21.jpg",
			imageAlt: "10 Jade Bathroom 4 - Phase 1 - Front angle of new tile flooring",
		},
		{
			index: 2, cardIndex: 2, cardLength: 8,
			image: "/images/projects/10jadelaundry/2024-02-01-15.37.21.jpg",
			imageAlt: "10 Jade Bathroom 4 - Phase 1 - Side view of new tile flooring",
		},
		{
			index: 2, cardIndex: 2, cardLength: 8,
			image: "/images/projects/10jadelaundry/2023-11-13-20.14.01.jpg",
			imageAlt: "10 Jade Bathroom 4 - Phase 1 - Tile is installed and room is ready for new cabinets and stonework",
		}
	];

	const TenJadeBathroom1 = [
		{
			index: 0, cardIndex: 0, cardLength: 5,
			image: "/images/projects/10jadebathroom1/2024-02-01-15.00.21.jpg",
			imageAlt: "10 Jade Bathroom 1 - Completed - Glass shower and tile walls and floors with quartzite countertop and custom carved sink",
		},
		{
			index: 1, cardIndex: 1, cardLength: 5,
			image: "/images/projects/10jadebathroom1/2024-02-01-15.00.16.jpg",
			imageAlt: "10 Jade Bathroom 1 - Completed - Glass shower and tile walls and floors with quartzite countertop and custom carved sink",
		},
		{
			index: 2, cardIndex: 2, cardLength: 5,
			image: "/images/projects/10jadebathroom1/2023-11-03-16.58.15.jpg",
			imageAlt: "10 Jade Bathroom 1 - Completed - Glass shower and tile walls and floors with quartzite countertop and custom carved sink",
		},
		{
			index: 2, cardIndex: 2, cardLength: 5,
			image: "/images/projects/10jadebathroom1/2023-10-24-17.38.43.jpg",
			imageAlt: "10 Jade Bathroom 1 - Completed - Detail of shower inset shelf with tile accents",
		},
		{
			index: 2, cardIndex: 2, cardLength: 5,
			image: "/images/projects/10jadebathroom1/2023-10-24-17.38.55.jpg",
			imageAlt: "10 Jade Bathroom 1 - Complete - Detail of shower tile flooring and custom drain",
		}
	];

	const TenJadeBathroom2 = [
		{
			index: 0, cardIndex: 0, cardLength: 3,
			image: "/images/projects/10jadebathroom2/2023-11-05-19.02.49.jpg",
			imageAlt: "10 Jade Bathroom 2 - Completed - Tile accent wall with stone bowl sink and stone countertop with accent wall lighting",
		},
		{
			index: 1, cardIndex: 1, cardLength: 3,
			image: "/images/projects/10jadebathroom2/img_9920.webp",
			imageAlt: "10 Jade Bathroom 2 - Completed - Tile accent wall with stone bowl sink and stone countertop with accent wall lighting",
		},
		{
			index: 2, cardIndex: 2, cardLength: 3,
			image: "/images/projects/10jadebathroom2/img_9927.webp",
			imageAlt: "10 Jade Bathroom 2 - Completed - Tile accent wall with stone bowl sink and stone countertop with accent wall lighting",
		}
	];

	const TenJadeBathroom3 = [
		{
			index: 0, cardIndex: 0, cardLength: 3,
			image: "/images/projects/10jadebathroom3/2023-11-20-13.42.38.jpg",
			imageAlt: "10 Jade Bathroom 3 - Completed - New vanity with stone countertop and black stone sink",
		},
		{
			index: 1, cardIndex: 1, cardLength: 3,
			image: "/images/projects/10jadebathroom3/2024-02-01-15.34.38.jpg",
			imageAlt: "10 Jade Bathroom 3 - Completed - Detail of varieties of hexagon tile flooring",
		},
		{
			index: 2, cardIndex: 2, cardLength: 3,
			image: "/images/projects/10jadebathroom3/2024-02-01-15.34.22.jpg",
			imageAlt: "10 Jade Bathroom 3 - Completed - All new hexagon tile flooring, new vanity with stone countertop and black stone sink",
		}
	];

	const TenJadeBathroom4 = [
		{
			index: 0, cardIndex: 0, cardLength: 8,
			image: "/images/projects/10jadebathroom4/img_9823.webp",
			imageAlt: "10 Jade Bathroom 4 - Before - Corner Jacuzzi Tub with brown marble surround",
		},
		{
			index: 1, cardIndex: 1, cardLength: 8,
			image: "/images/projects/10jadebathroom4/img_9820.webp",
			imageAlt: "10 Jade Bathroom 4 - Before - Brown marble shower with glass door",
		},
		{
			index: 2, cardIndex: 2, cardLength: 8,
			image: "/images/projects/10jadebathroom4/img_9821.webp",
			imageAlt: "10 Jade Bathroom 4 - Before - Brown wood vanity with stone counter, double sink and mirror",
		}, {
			index: 3, cardIndex: 3, cardLength: 8,
			image: "/images/projects/10jadebathroom4/img_0737.webp",
			imageAlt: "10 Jade Bathroom 4 - Completed - 6 foot soaking tub with tile surround",
		},
		{
			index: 4, cardIndex: 4, cardLength: 8,
			image: "/images/projects/10jadebathroom4/img_0745.webp",
			imageAlt: "10 Jade Bathroom 4 - Completed - Glass enclosed shower with tile walls and floor",
		},
		{
			index: 5, cardIndex: 5, cardLength: 8,
			image: "/images/projects/10jadebathroom4/img_0738.webp",
			imageAlt: "10 Jade Bathroom 4 - Completed - Vanity with Medusa Onyx stone countertop, double sinks and large lit mirror",
		}, 
		{
			index: 6, cardIndex: 6, cardLength: 8,
			image: "/images/projects/10jadebathroom4/img_0743.webp",
			imageAlt: "10 Jade Bathroom 4 - Completed - Underlit vanity with Medusa Onyx countertop, double sinks and large lit mirror",
		}, 
		{
			index: 7, cardIndex: 7, cardLength: 8,
			image: "/images/projects/10jadebathroom4/img_0581.webp",
			imageAlt: "10 Jade Bathroom 4 - Completed - Underlit vanity with double sinks and large lit mirror",
		}
	];

	const TenJadeDeck = [
		{
			index: 0, cardIndex: 0, cardLength: 3,
			image: "/images/projects/10jadedeck/2024-09-25-01.27.57.webp",
			imageAlt: "10 Jade Deck - Before - Demolition of old deck",
		},
		{
			index: 1, cardIndex: 1, cardLength: 3,
			image: "/images/projects/10jadedeck/img_2656.webp",
			imageAlt: "10 Jade Deck - Completed - all new boards in herringbone pattern",
		},
		{
			index: 2, cardIndex: 2, cardLength: 3,
			image: "/images/placeholder.png",
			imageAlt: "10 Jade Deck - Project Photo 9",
		}
	];

	const TenJadeKitchen = [
		{
			index: 0, cardIndex: 0, cardLength: 6,
			image: "/images/projects/10jadekitchen/img_2427.jpeg",
			imageAlt: "10 Jade Kitchen - Demolition has begun",
		},
		{
			index: 1, cardIndex: 1, cardLength: 6,
			image: "/images/projects/10jadekitchen/img_2428.jpeg",
			imageAlt: "10 Jade Kitchen - Demolition to the studs and plywood",
		},
		{
			index: 2, cardIndex: 2, cardLength: 6,
			image: "/images/projects/10jadekitchen/2025-09-03-16.17.30.jpg",
			imageAlt: "10 Jade Kitchen - Stone choice for the island countertop",
		},
		{
			index: 3, cardIndex: 3, cardLength: 6,
			image: "/images/projects/10jadekitchen/2025-09-12-09.28.05.jpg",
			imageAlt: "10 Jade Kitchen - Stone choice for the perimeter countertops",
		},
		{
			index: 4, cardIndex: 4, cardLength: 6,
			image: "/images/projects/10jadekitchen/img_3350.jpeg",
			imageAlt: "10 Jade Kitchen - Adding final electrical fixture above the island",
		},
		{
			index: 5, cardIndex: 5, cardLength: 6,
			image: "/images/projects/10jadekitchen/img_3438.jpeg",
			imageAlt: "10 Jade Kitchen - Finishing crown molding installation above cabinets, attention to detail",
		}
	];

    
	return (
		<>

			<PageTitleHeader title="JZ Home Improvement Projects" />

			<PageSection columns={1} maxWidth="1024px" padding="20px" id="colors-section">
				<PageSectionHeader title="Our Projects" />

				<h3>10 Jade Kitchen</h3>
				<p>For this kitchen remodel at 10 Jade, we completely transformed the space
					into a modern and functional kitchen. The old cabinetry and appliances were removed,
					and we installed new custom cabinets, Taj Mahal quartzite countertops on the perimeter, 
					Blue Louise quartzite "hero piece" on the island, and high-end stainless steel appliances.
					The layout was redesigned to improve workflow and maximize storage space, resulting in a beautiful
					and efficient kitchen that is the centerpiece of their family life.
				</p>
				<Tiles cards={TenJadeKitchen} rowCount={3}/>

				<h3>10 Jade Deck</h3>
				<p>This 20 year old deck for our customer at 10 Jade was 
					in desperate need of some love, and 
					we were happy to provide it.  The old wood decking was removed
					and replaced with beautiful new composite decking that not only
					looks great in a unique herringbone pattern, but is also 
					low maintenance and long lasting.  A new perfect place to
					relax and entertain outdoors!
				</p>
				<Tiles cards={TenJadeDeck} rowCount={3}/>

				<h3>10 Jade Master Bathroom</h3>
				<p>For this project, we transformed the master bathroom with 
					luxurious materials and modern design elements. A large 6 foot soaking tub
					with tile surround was installed, along with a glass enclosed shower and a 
					vanity featuring Medusa Onyx stone countertops, two stone carved sinks,  and a 
					unique underlit vanity with LED light panels.</p>
				<Tiles cards={TenJadeBathroom4} rowCount={3}/>

				<h3>10 Jade First Floor Half Bathroom</h3>
				<p>In this high traffic half bathroom, we focused on creating a stylish and functional space. 
					We installed a variety of different styles of hexagonal tile flooring, 
					a modern vanity with stone countertop and a black sink, and updated fixtures
					to give the bathroom a fresh and inviting look.
				</p>
				<Tiles cards={TenJadeBathroom3} rowCount={3}/>


				<h3>10 Jade Laundry Room</h3>
				<p>The first phase of the laundry makeover for 10 Jade was completed with 
					new updated appliances, a new stainless steel utility sink, and 
					upgrade to faux stone tiles to improve functionality and aesthetics.  
					The second phase was to upgrade with new cabinets, shelving, and 
					quartzite stone countertops and backsplashes to match the rest of the kitchen.</p>
				<Tiles cards={TenJadeLaundry} rowCount={3}/>


				<h3>10 Jade Basement Half Bathroom</h3>
				<p>The floor-to-ceiling stone accent wall creates a striking focal point 
					in this basement half bathroom, adding texture and visual interest to the space.
					The floor tile was upgraded to match, along with the stone countertop and bowl sink. 
					The lighting complements the overall design, enhancing the room's aesthetic appeal.</p>
				<Tiles cards={TenJadeBathroom2} rowCount={3}/>

				<h3>10 Jade Guest Bathroom</h3>
				<p>To update the guest bathroom, we focused on modernizing the space with new fixtures, tile work, and a fresh color palette.
					The result is a bright and welcoming bathroom that combines functionality with style.  
					You can see Glassh shower and tile walls and floors with quartzite countertop and custom carved sink
				</p>
				<Tiles cards={TenJadeBathroom1} rowCount={3}/>

			</PageSection>

		</>
	);
}
