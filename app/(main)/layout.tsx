import { Flex, Menu } from 'antd';

export default function Layout({ children }: React.PropsWithChildren) {
  // Let's use some antd components before streaming happens
  return (
    <Flex vertical gap={32}>
      <Menu mode='horizontal' items={[
          { key: 1, label: 'Menu Item 1 ' },
          { key: 2, label: 'Menu item 2' },
        ]}
      />
      <div>{children}</div>
    </Flex>
  );
}
