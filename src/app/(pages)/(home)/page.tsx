"use client" 

import React from 'react'
import { PageSection, PageTitleHeader } from '@pixelated-tech/components';

export default function Home() {
  return (
    <>
		<PageTitleHeader title="JZ Home Improvement" />

		<PageSection columns={1} maxWidth="1024px" id="header-section">
			<p>Welcome to JZ Home Improvement</p>
		</PageSection>
    </>
  )
}
