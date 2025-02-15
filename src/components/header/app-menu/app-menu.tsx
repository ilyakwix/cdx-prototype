import { DropdownMenu, Button } from "@radix-ui/themes";

export const AppMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button size="1" variant="ghost">
          <svg width="22" fill="none" viewBox="0 0 22 23">
            <path
              fill="#495AEF"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.015 7.022a6.2 6.2 0 0 1-.585 2.636c2.854.597 4.997 3.11 4.997 6.12 0 3.455-2.822 6.256-6.302 6.256H6.302C2.822 22.034 0 19.233 0 15.779c0-3.01 2.143-5.524 4.997-6.12a6.192 6.192 0 0 1-.586-2.637c0-3.454 2.822-6.254 6.302-6.254 3.48 0 6.302 2.8 6.302 6.254Z"
            />
            <path
              fill="#fff"
              d="m11.434 7.77 2.19 1.173a.624.624 0 0 1 0 1.102l-2.19 1.173a1.546 1.546 0 0 1-1.46 0l-2.179-1.174a.623.623 0 0 1 0-1.1l2.179-1.173a1.543 1.543 0 0 1 1.46-.001Z"
            />
          </svg>
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item shortcut="⌘ W">Go to Dashboard</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ ,">Account Settings</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Docs</DropdownMenu.Item>
        <DropdownMenu.Item>Feedback</DropdownMenu.Item>
        <DropdownMenu.Item>Support</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Log out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
