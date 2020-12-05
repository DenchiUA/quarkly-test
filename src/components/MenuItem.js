import React from "react";
import atomize from "@quarkly/atomize";
import { useOverrides } from "@quarkly/components";
import { Icon, Link, Box } from "@quarkly/widgets";
import { MdHome } from "react-icons/md";
const defaultProps = {
	"display": "flex",
	"padding": "10px 10px 10px 10px",
	"align-items": "center"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdHome,
			"margin": "0px 10px 0px 0px"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"text-decoration-line": "initial",
			"color": "--darkL2",
			"font": "16px/1 sans-serif",
			"children": "Home"
		}
	}
};

const MenuItem = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon {...override("icon")} />
		<Link {...override("link")} />
		{children}
	</Box>;
};

Object.assign(MenuItem, { ...Box,
	defaultProps,
	overrides
}); // export default MenuItem

export default atomize(MenuItem)({
	name: "MenuItem",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here the description for your component
		en: "Rotate Animation Component"
	},
	propInfo: {
		// paste here the props description for your component
		yourCustomProps: {
			control: "input",
			description: {
				en: 'Hello'
			}
		}
	}
});