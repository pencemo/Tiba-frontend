import * as React from "react";
import { Check, ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function SidebarFilter({ fiterItem, defaultOpen = false, setCheckBox, checkBoxValue }) {
 const allSlected = checkBoxValue.length === fiterItem.items.length
  const handleCheckboxChange = (item) => {
    setCheckBox((prevCheckedItems) => {
      if (prevCheckedItems.includes(item)) {
        // If item is already in the array, remove it
        return prevCheckedItems.filter((i) => i !== item);
      } else {
        // If item is not in the array, add it
        return [...prevCheckedItems, item];
      }
    });
  };

  const handleSelectAll = () => {
   if(!allSlected){
    setCheckBox(fiterItem.items)
   }else{
    setCheckBox([])
   }
  }
  return (
    <>
      <SidebarGroup className="py-0">
        <Collapsible defaultOpen={defaultOpen} className="group/collapsible">
          <SidebarGroupLabel
            asChild
            className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <CollapsibleTrigger>
              {fiterItem.name}{" "}
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                  <SidebarMenuItem className="flex gap-2">
                    <div className="flex items-center gap-2 ps-5">
                      <Checkbox id={'all'} checked={allSlected} onCheckedChange={()=>handleSelectAll()} />
                      <label htmlFor={'all'}>All</label>
                    </div>
                  </SidebarMenuItem>
                {fiterItem.items.map((item, index) => (
                  <SidebarMenuItem key={index} className="flex gap-2">
                    <div className="flex items-center gap-2 ps-5">
                      <Checkbox id={item} checked={checkBoxValue.includes(item)} onCheckedChange={()=>handleCheckboxChange(item)} />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </Collapsible>
      </SidebarGroup>
      <SidebarSeparator className="mx-0" />
      
      
    </>
  );
}
