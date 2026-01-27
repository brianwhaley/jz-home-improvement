"use client" 

import React from 'react'
import { PageSection, PageTitleHeader } from '@pixelated-tech/components';
import { LoremIpsum } from '@pixelated-tech/components';
import { Hero } from "@pixelated-tech/components";

export default function Home() {
  return (
    <>
		<Hero
			img="/images/10jadebathroom4/img_0745.webp"
			variant="anchored"
		>
			<PageTitleHeader title="JZ Home Improvement" />
			<h2>Expert Work. Honest Pricing. Real Results.</h2>
		</Hero>

		<PageSection columns={1} maxWidth="1024px" id="home-section">

			{ /* <p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra turpis eu libero sodales, vitae sagittis purus mollis. Fusce ultrices urna eget bibendum sollicitudin. Etiam magna augue, dictum mattis volutpat ac, dictum at ex. Aliquam sed dolor sollicitudin, aliquam urna sit amet, laoreet mi. Ut sit amet urna tincidunt, volutpat lectus ut, convallis est. Maecenas pretium eu eros id ultricies. Nullam enim purus, sodales id velit sit amet, hendrerit dignissim velit. Etiam ultrices ante est, vitae malesuada mauris aliquet vel. Phasellus rhoncus, metus nec iaculis hendrerit, turpis purus auctor mauris, sed varius purus felis a risus. Aliquam ultricies laoreet lectus nec laoreet. Nunc venenatis pellentesque turpis, sit amet mattis mi vestibulum ullamcorper. Quisque vitae mauris nec quam cursus aliquet.
			</p><p>
			Morbi fringilla velit vitae velit malesuada, eget tempor purus tristique. Vivamus rhoncus semper nisi a tempor. Sed nisi est, facilisis quis tristique ornare, maximus ut turpis. Donec commodo magna nec accumsan mollis. Nunc et erat nisi. Nam suscipit tempor dignissim. Aliquam at commodo ipsum, ac rutrum metus. Cras vitae nulla nisi. Maecenas in felis at magna aliquam blandit vitae et dui. Maecenas enim orci, sollicitudin ac neque nec, vehicula mollis ipsum.
			</p><p>
			Ut porta magna semper nunc iaculis consequat. Pellentesque auctor massa libero, a dapibus libero aliquet in. Vestibulum nunc neque, varius at tortor in, tempor volutpat diam. Integer ultricies nec risus sodales lobortis. Proin nec nisl vitae enim sollicitudin vestibulum. Fusce faucibus, nunc eget sodales ornare, tellus dui tincidunt felis, in ultrices metus lacus at erat. Nulla turpis libero, elementum vitae interdum non, venenatis vel enim. Etiam ut erat vitae urna consectetur varius vel a justo. Donec a tortor non arcu ultrices sodales. Fusce sagittis est eu sapien porta blandit. Vivamus placerat lectus eu aliquam lacinia. Pellentesque tristique ullamcorper sapien, vel pharetra lorem tincidunt molestie. Praesent ultrices quis nulla nec ornare. Nunc quis nulla sed ligula venenatis elementum at nec sapien.
			</p><p>
			Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tincidunt egestas urna ut sollicitudin. Nunc sodales tincidunt quam. Praesent bibendum volutpat tincidunt. Integer mauris enim, luctus eget fermentum eget, egestas et massa. Nunc a lectus eget sem commodo viverra vitae quis turpis. Etiam at tortor luctus, pharetra leo in, iaculis mi. Donec vel urna sed urna commodo ullamcorper a vitae sapien. Maecenas eget mi quis ligula tempus imperdiet. Praesent ultrices odio ut pharetra interdum. Maecenas venenatis imperdiet eros, aliquet varius nisi accumsan quis. Suspendisse egestas placerat facilisis.
			</p><p>
			Mauris eget nisl purus. Pellentesque suscipit laoreet quam, nec rhoncus metus maximus eget. Nulla ullamcorper in est non vestibulum. Nulla rhoncus suscipit urna, at eleifend purus dignissim id. Mauris et suscipit mauris. Duis congue tortor eget nisl semper, vel tempus turpis rhoncus. Phasellus luctus eu est congue iaculis. Proin dolor velit, ultrices sed iaculis vel, venenatis id ipsum. Morbi sed vulputate lorem. Vivamus consectetur dictum augue rutrum rutrum.
			</p><p>
			Nulla facilisi. Quisque sagittis augue nec maximus gravida. Etiam magna libero, lobortis a sagittis a, maximus sit amet ex. Proin pharetra gravida dictum. Sed tincidunt placerat faucibus. Proin viverra elit ante, et euismod felis elementum ac. Maecenas luctus vehicula cursus.
			</p><p>
			Cras rutrum vitae arcu vel pellentesque. Pellentesque imperdiet ex a scelerisque dapibus. Aenean viverra orci et mi semper molestie. Aliquam erat volutpat. Nam et neque elit. Sed in mattis dui. Maecenas mattis sollicitudin ornare. Praesent sed metus eget nisl convallis pellentesque et id ex. Sed facilisis metus eget justo convallis, nec luctus libero pretium. Sed at justo ex. Aliquam sed suscipit nisl. Fusce venenatis ac quam vel auctor. Donec finibus tristique mauris, vel sagittis enim lacinia nec. Duis ultricies nunc elementum velit feugiat, id laoreet nulla consequat. Praesent hendrerit vehicula est quis varius. Fusce vitae ligula non enim facilisis convallis id eu tortor.
			</p><p>
			Vivamus eu faucibus sem, et sodales eros. Morbi commodo, orci sit amet malesuada tempus, eros urna tristique diam, quis fermentum arcu orci a tortor. Aliquam erat volutpat. Morbi dapibus, ex efficitur molestie dictum, sapien sem vulputate elit, et elementum erat sapien et urna. Morbi ultrices nunc sed tortor consequat fringilla. Pellentesque sit amet ante sed erat placerat finibus nec a urna. Praesent non tempor justo, vel lobortis neque. Mauris at nulla ut diam fringilla efficitur. Etiam nec metus in leo bibendum bibendum. Nam laoreet neque et molestie auctor. Aenean id ante aliquet, efficitur sem et, mollis lorem. Suspendisse lectus ligula, venenatis ut lectus eu, cursus pretium ipsum. Morbi euismod gravida massa, ac aliquet tortor laoreet quis. Mauris sagittis eros eget scelerisque porttitor. Cras hendrerit quam vitae urna sagittis, eget accumsan urna finibus.
			</p><p>
			Ut erat lacus, faucibus ut lacus ut, finibus vehicula diam. Etiam in est euismod nibh tincidunt ornare. Aliquam ac dui facilisis, pretium sapien ac, semper sem. Nunc eget sollicitudin nisl, at varius leo. Sed mattis justo ac condimentum accumsan. Aliquam sollicitudin, mi sit amet ultricies sagittis, erat est ultrices augue, a mattis justo urna eget sapien. Integer vel leo vitae ligula cursus consectetur et non risus. Nulla porttitor aliquam quam, gravida tempor sapien. Sed commodo enim vitae consectetur faucibus. Pellentesque fermentum enim quis molestie posuere. Sed quam lorem, aliquam at fermentum id, ornare quis mauris. Curabitur et est id justo dignissim suscipit eget id massa. Sed tincidunt mi commodo dignissim ultrices. Vivamus bibendum laoreet augue, vitae consectetur tortor mollis ut.
			</p><p>
			Cras lacinia tellus pharetra, lacinia metus eget, ullamcorper lectus. Phasellus tristique tristique lectus, vel tempus tellus elementum quis. Aenean libero massa, dictum id ligula in, vulputate pellentesque est. Donec ac nibh sollicitudin, mollis felis ut, placerat dui. Proin rhoncus aliquet mi at tincidunt. Duis faucibus leo sagittis varius scelerisque. Morbi vel tristique augue, at placerat neque.
			</p> */ }

			<LoremIpsum paragraphs={10} seed="" />

		</PageSection>
    </>
  )
}
