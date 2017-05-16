### Import

`import { Button } from 'probo-ui-components';`

### Colors

```example
  <div className="example">
    <Button>Button</Button>
    <Button color="white">White</Button>
    <Button color="light">Light</Button>
    <Button color="dark">Dark</Button>
    <Button color="black">Black</Button>
    <Button color="link">Link</Button>
    <Button color="primary">Primary</Button>
    <Button color="info">Info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
  </div>
```

### Sizes

```example
  <div className="example">
    <Button size="small">Small</Button>
    <Button>Normal</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
```

### Styles

#### Outlined

```example
  <div className="example">
    <Button buttonStyle="isOutlined">Outlined</Button>
    <Button buttonStyle="isOutlined" color="primary">Outlined</Button>
    <Button buttonStyle="isOutlined" color="info">Outlined</Button>
    <Button buttonStyle="isOutlined" color="success">Outlined</Button>
    <Button buttonStyle="isOutlined" color="danger">Outlined</Button>
  </div>
```

#### Inverted

```example
  <div className="example">
    <Button buttonStyle="inverted">Inverted</Button>
    <Button buttonStyle="inverted" color="primary">Inverted</Button>
    <Button buttonStyle="inverted" color="info">Inverted</Button>
    <Button buttonStyle="inverted" color="success">Inverted</Button>
    <Button buttonStyle="inverted" color="danger">Inverted</Button>
  </div>
```

### States

#### Loading

```example
  <div className="example">
    <Button state="isLoading">Loading</Button>
    <Button state="isLoading" color="primary">Loading</Button>
    <Button state="isLoading" color="info">Loading</Button>
    <Button state="isLoading" color="success">Loading</Button>
    <Button state="isLoading" color="danger">Loading</Button>
  </div>
```

#### Active

```example
  <div className="example">
    <Button state="isActive">Active</Button>
    <Button state="isActive" color="primary">Active</Button>
    <Button state="isActive" color="info">Active</Button>
    <Button state="isActive" color="success">Active</Button>
    <Button state="isActive" color="danger">Active</Button>
  </div>
```

#### Disabled

```example
  <div className="example">
    <Button state="isDisabled">Disabled</Button>
    <Button state="isDisabled" color="primary">Disabled</Button>
    <Button state="isDisabled" color="info">Disabled</Button>
    <Button state="isDisabled" color="success">Disabled</Button>
    <Button state="isDisabled" color="danger">Disabled</Button>
  </div>
```

### Icon

Using Font Awesome icons.

```example
  <div className="example">
    <Button icon="fa fa-github">GitHub</Button>
    <Button icon="fa fa-twitter" color="primary">Twitter</Button>
    <Button icon="fa fa-check" color="success">Save</Button>
    <Button icon="fa fa-times" color="danger" isIconRight>Delete</Button>
  </div>
```

### Button Group

```example
  <Group>
    <Button color="primary">Save changes</Button>
    <Button>Cancel</Button>
    <Button color="danger">Delete post</Button>
  </Group>
```
