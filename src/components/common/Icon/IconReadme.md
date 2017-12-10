# Icon Component

## Usage

```js
import Icon from '/components/common/Lab/Icon';
```

## Properties
- *`{icon}`* - String that asserts which icon will render.
- *`{size}`* - Size of icon.
- *`{color}`* - Color of icon.
- *`{spin}`* - Flag that asserts if icon spin or not.

| propName      | propType | isRequired   | defaultValue |
|---------------|----------|--------------|--------------|
| icon          | string   | yes          |              |
| size          | number   | no           | 20           |
| color         | string   | no           | #000         |
| spin          | boolean  | no           | false        |


## Icon

*This is the doDOC Icon gallery.*
- List of the available icons.
> This list is particular because all the icons are directly embedded in the code (no need for HTTP requests). That means they will load faster and in a more reliable fashion.
The icons can be rendered through the <Icon /> common component.


### Example
```js
import Icon from '/components/common/Lab/Icon';

<Icon
  icon="heart"
  size={20}
  color="black"
  spin={false}
/>
```
