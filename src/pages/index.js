import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Strong, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import * as Components from "components";
import { FaRegUserCircle } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box min-height="100vh" display="flex" width="3">
			<Box
				width="320px"
				display="flex"
				flex-direction="column"
				box-shadow="--xxl"
				background="--color-light"
				position="relative"
				z-index="1"
				quarkly-title="Sidebar"
			>
				<Box
					padding="15px 15px 15px 15px"
					display="flex"
					align-items="center"
					border-width="0px 0px 1px 0px"
					border-style="solid"
					quarkly-title="UserBlock"
				>
					<Icon category="fa" icon={FaRegUserCircle} margin="0px 15px 0px 0px" size="32px" />
					<Text margin="0px 0px 0px 0px">
						<Strong font="700 18px sans-serif">
							Denys Vasylchenko
						</Strong>
					</Text>
				</Box>
				<Box quarkly-title="List">
					<Components.MenuItem />
				</Box>
			</Box>
			<Box display="flex" width="100%" min-height="0px" background="--color-lightD2" />
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});