<?php

use Illuminate\Database\Seeder;
use Tiketux\Menu\Models\Menu as ModelMenu;

class Menu extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ModelMenu::create([
            "icon" => "face",
            "name" => "User Management",
            "url" => "usermanagement",
            "is_admin" => 1,
        ]);
        ModelMenu::create([
            "icon" => "public",
            "name" => "Online Stack",
            "url" => "rancherprojects",
            "is_admin" => 1,
        ]);
        ModelMenu::create([
            "icon" => "book",
            "name" => "Stack",
            "url" => "stack",
            "is_admin" => 1,
        ]);
        ModelMenu::create([
            "icon" => "dashboard",
            "name" => "Stack Template",
            "url" => "stack_template",
            "is_admin" => 1,
        ]);
        ModelMenu::create([
            "icon" => "settings",
            "name" => "Stack Config",
            "url" => "stack_config",
            "is_admin" => 1,
        ]);
        ModelMenu::create([
            "icon" => "apps",
            "name" => "Menu",
            "url" => "menu",
            "is_admin" => 1,
        ]);
    }
}
