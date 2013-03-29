require "rubygems"
# require "bundler"

# Add all gems installed in the system to the $LOAD_PATH so they can be used in Rails console with Bundler
if defined?(::Bundler)
  Dir.glob("#{Gem.path.first}/gems/*/lib").each do |path|
    $LOAD_PATH << path
  end
end

require 'interactive_editor'
require 'map_by_method'
require 'what_methods'
require 'pp'
require 'irb/completion'
require 'irb/ext/save-history'
require 'wirble'
require 'hirb'
require 'awesome_print'

Wirble.init
Wirble.colorize

class Object
  def local_methods(obj = self)
    (obj.methods - obj.class.superclass.instance_methods).sort
  end

  # add a `p` method to all objects to pretty print
  unless self.respond_to? :p
    define_method :p do
      ap self
    end
  end

  unless self.respond_to? :t
    define_method :t do
      puts Hirb::Helpers::Table.render self.respond_to?(:length) ? self.to_a.map(&:as_json) : [self.as_json]
    end
  end
end

IRB.conf[:AUTO_INDENT] = true
IRB.conf[:PROMPT][:SIMPLE] = {
  :PROMPT_I => ">> ",
  :PROMPT_S => "%l> ",
  :PROMPT_C => "%i> ",
  :RETURN => "%s\n"
}
IRB.conf[:PROMPT_MODE]  = :SIMPLE
IRB.conf[:USE_READLINE] = true
IRB.conf[:SAVE_HISTORY] = 1000
IRB.conf[:HISTORY_FILE] = "#{ENV['HOME']}/.irb_history"
