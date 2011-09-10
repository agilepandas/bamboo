//
//  SprockAppDelegate.h
//  Sprock
//
//  Created by Jeffrey Wilcke on 9/10/11.
//  Copyright 2011 AP. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <WebKit/WebKit.h>
@interface SprockAppDelegate : NSObject <NSApplicationDelegate> {
  NSWindow *window;
}

@property (assign) IBOutlet NSWindow *window;
@property (assign, nonatomic) IBOutlet WebView *webview;
@end
