import { CommonModule } from '@inova-test/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavigationComponent } from './navigation.component';

export default {
  title: 'NavigationComponent',
  component: NavigationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule
      ],
    }),
  ],
} as Meta<NavigationComponent>;

const Template: Story<NavigationComponent> = (args: NavigationComponent) => ({
  component: NavigationComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
