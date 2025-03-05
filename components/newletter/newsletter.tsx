import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send } from 'lucide-react';

export default function Newsletter() {
    return (
        <Card className="mt-16 mb-8 bg-gradient-to-r from-primary/5 to-primary/10 border-none">
            <div className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-6">New Things Will Always Update Regularly</h2>

                <div className="max-w-md mx-auto">
                    <form className="flex gap-2">
                        <Input
                            type="email"
                            placeholder="Enter your email here"
                            className="bg-white"
                            required
                        />
                        <Button type="submit">
                            Subscribe
                            <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </Card>
    );
}