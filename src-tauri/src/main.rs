#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::process::Command;

#[tauri::command]
fn display_path(name: &str) -> String {
    let current_path = Command::new("pwd").output().expect("Something went wrong");
    let log = String::from_utf8(current_path.stdout).unwrap();
    log
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, display_path])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
