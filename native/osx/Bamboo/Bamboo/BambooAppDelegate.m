//
//  BambooAppDelegate.m
//  Bamboo
//
//  Created by Jeffrey Wilcke on 9/10/11.
//  Copyright 2011 AP. All rights reserved.
//

#import "BambooAppDelegate.h"

@implementation BambooAppDelegate

@synthesize window, webview;

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification
{
  NSURL*url=[NSURL URLWithString:@"http://localhost:3000"];
  NSURLRequest*request=[NSURLRequest requestWithURL:url];
  [[webview mainFrame] loadRequest:request];
}

@end
